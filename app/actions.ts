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

export async function sendContactEmail(formData: FormData) {
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const phone = clean(formData.get("phone"));
  const city = clean(formData.get("city"));
  const requirement = clean(formData.get("requirement"));
  const message = clean(formData.get("message"));

  if (!name || !email || !phone || !city || !requirement || !message) {
    redirect("/?status=missing#contact-form");
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    redirect("/?status=config-error#contact-form");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCity = escapeHtml(city);
  const safeRequirement = escapeHtml(requirement);
  const safeMessage = escapeHtml(message);

  await transporter.sendMail({
    from: `Portfolio Contact <${emailUser}>`,
    to: emailUser,
    replyTo: email,
    subject: `New Portfolio Inquiry from ${name}`,
    text: [
      "New contact form submission:",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `City: ${city}`,
      `Requirement: ${requirement}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `
      <h2>New Portfolio Inquiry</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>City:</strong> ${safeCity}</p>
      <p><strong>Requirement:</strong> ${safeRequirement}</p>
      <p><strong>Message:</strong><br/>${safeMessage.replaceAll("\n", "<br/>")}</p>
    `,
  });

  redirect("/?status=sent#contact-form");
}
