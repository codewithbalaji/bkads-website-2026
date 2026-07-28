"use server";

import { Resend } from "resend";

import { CONTACT } from "@/lib/site";
import type { ContactState } from "@/app/contact/contact-state";

// Deliberately loose but practical email shape check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form Server Action. Treats FormData as untrusted: validates, guards against
 * bots with a honeypot, then relays the enquiry to CONTACT.email via Resend.
 */
export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — real users never see or fill this. Pretend success, send nothing.
  if (typeof formData.get("company_url") === "string" && formData.get("company_url")) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!message) errors.message = "Please enter a message.";
  else if (message.length < 10) errors.message = "Please add a little more detail (min 10 characters).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "The contact form isn't fully configured yet. Please email us directly at " +
        CONTACT.email +
        ".",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "BKADS Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? CONTACT.email,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again in a moment.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again in a moment.",
    };
  }
}
