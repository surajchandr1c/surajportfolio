"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parsePort(value: string | undefined, fallback: number) {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (!value) return fallback;
  return value.toLowerCase() === "true";
}

function mapMailErrorToStatus(error: unknown) {
  if (!error || typeof error !== "object") return "error";
  const anyError = error as { code?: unknown; message?: unknown; responseCode?: unknown };
  const code = typeof anyError.code === "string" ? anyError.code : "";
  const message = typeof anyError.message === "string" ? anyError.message : "";
  const responseCode = typeof anyError.responseCode === "number" ? anyError.responseCode : undefined;

  if (code === "EAUTH" || responseCode === 535) return "auth-error";
  if (code === "ETIMEDOUT") return "timeout";
  if (code === "ECONNECTION" || code === "ESOCKET") return "connection-error";
  if (message.toLowerCase().includes("self signed certificate")) return "tls-error";

  return "error";
}

export async function sendContactEmail(formData: FormData) {
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const phone = clean(formData.get("phone"));
  const city = clean(formData.get("city"));
  const requirement = clean(formData.get("requirement"));
  const message = clean(formData.get("message"));

  if (!name || !email || !requirement || !message) {
    redirect("/?status=missing#contact-form");
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parsePort(process.env.SMTP_PORT, smtpHost ? 587 : 587);
  const smtpSecure = parseBoolean(process.env.SMTP_SECURE, smtpPort === 465);
  const smtpService = process.env.SMTP_SERVICE;
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO || smtpUser;
  const allowSelfSigned = parseBoolean(process.env.SMTP_ALLOW_SELF_SIGNED, false);

  if (!smtpUser || !smtpPass || !emailTo) {
    redirect("/?status=config-error#contact-form");
  }

  const transporter = nodemailer.createTransport({
    ...(smtpService
      ? { service: smtpService }
      : smtpHost
        ? { host: smtpHost, port: smtpPort, secure: smtpSecure }
        : { service: "gmail" }),
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    connectionTimeout: parsePort(process.env.SMTP_CONNECTION_TIMEOUT_MS, 10_000),
    greetingTimeout: parsePort(process.env.SMTP_GREETING_TIMEOUT_MS, 10_000),
    socketTimeout: parsePort(process.env.SMTP_SOCKET_TIMEOUT_MS, 20_000),
    tls: allowSelfSigned ? { rejectUnauthorized: false } : undefined,
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCity = escapeHtml(city);
  const safeRequirement = escapeHtml(requirement);
  const safeMessage = escapeHtml(message);

  try {
    await transporter.verify();
    await transporter.sendMail({
      from: `Portfolio Contact <${smtpUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      text: [
        "New contact form submission:",
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        city ? `City: ${city}` : null,
        `Requirement: ${requirement}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
        ${safeCity ? `<p><strong>City:</strong> ${safeCity}</p>` : ""}
        <p><strong>Requirement:</strong> ${safeRequirement}</p>
        <p><strong>Message:</strong><br/>${safeMessage.replaceAll("\n", "<br/>")}</p>
      `,
    });
  } catch (error) {
    console.error("Contact form email failed:", error);
    const status = mapMailErrorToStatus(error);
    redirect(`/?status=${encodeURIComponent(status)}#contact-form`);
  }

  redirect("/?status=sent#contact-form");
}
