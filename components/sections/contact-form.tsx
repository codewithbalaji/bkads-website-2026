"use client";

import { useActionState, useId } from "react";
import { CheckCircle2 } from "lucide-react";

import { submitContact } from "@/app/contact/actions";
import {
  initialContactState,
  type ContactState,
} from "@/app/contact/contact-state";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none";

function fieldClasses(hasError: boolean) {
  return cn(
    fieldBase,
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-foreground/30",
  );
}

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    submitContact,
    initialContactState,
  );

  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const messageId = useId();

  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <Reveal>
        <div
          role="status"
          aria-live="polite"
          className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8"
        >
          <CheckCircle2 className="size-8 text-foreground" aria-hidden />
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            Thanks — your message is on its way.
          </h3>
          <p className="text-sm text-muted-foreground">
            We&apos;ll get back to you within one business day. In the meantime, feel free
            to reply to the confirmation from your inbox.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form
        action={formAction}
        noValidate
        className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        {state.status === "error" && state.message ? (
          <p
            role="alert"
            className="mb-6 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            {state.message}
          </p>
        ) : null}

        {/* Honeypot: hidden from users, catches bots. */}
        <div aria-hidden className="hidden">
          <label htmlFor="company_url">Company website</label>
          <input
            id="company_url"
            name="company_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-5">
          <div className="grid gap-2">
            <label htmlFor={nameId} className="text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${nameId}-error` : undefined}
              className={fieldClasses(Boolean(errors.name))}
            />
            {errors.name ? (
              <p id={`${nameId}-error`} className="text-sm text-destructive">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label htmlFor={emailId} className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${emailId}-error` : undefined}
              className={fieldClasses(Boolean(errors.email))}
            />
            {errors.email ? (
              <p id={`${emailId}-error`} className="text-sm text-destructive">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label htmlFor={companyId} className="text-sm font-medium text-foreground">
              Company{" "}
              <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              id={companyId}
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Your company"
              className={fieldClasses(false)}
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor={messageId} className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id={messageId}
              name="message"
              rows={5}
              placeholder="Tell us a little about what you're looking for…"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? `${messageId}-error` : undefined}
              className={cn(fieldClasses(Boolean(errors.message)), "resize-y")}
            />
            {errors.message ? (
              <p id={`${messageId}-error`} className="text-sm text-destructive">
                {errors.message}
              </p>
            ) : null}
          </div>

          <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
            {isPending ? "Sending…" : "Send message"}
          </Button>
        </div>
      </form>
    </Reveal>
  );
};

export default ContactForm;
