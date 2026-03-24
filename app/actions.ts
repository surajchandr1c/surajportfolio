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
  const smtpPort = parsePort(process.env.SMTP_PORT, 465);
  const smtpSecure = parseBoolean(process.env.SMTP_SECURE, smtpPort === 465);
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO || smtpUser;

  if (!smtpUser || !smtpPass || !emailTo) {
    redirect("/?status=config-error#contact-form");
  }

  const transporter = nodemailer.createTransport(
    smtpHost
      ? {
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        }
      : {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        },
  );

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCity = escapeHtml(city);
  const safeRequirement = escapeHtml(requirement);
  const safeMessage = escapeHtml(message);

  try {
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
    redirect("/?status=error#contact-form");
  }

  redirect("/?status=sent#contact-form");
}
