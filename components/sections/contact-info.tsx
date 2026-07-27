import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { CONTACT, SOCIALS } from "@/lib/site";

type SocialIcon = (props: { className?: string }) => React.ReactNode;

// Inline brand SVGs (lucide-react dropped brand icons; defined here so this
// server component has no cross-module client reference).
const SOCIAL_ICONS: Record<string, SocialIcon> = {
  LinkedIn: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Instagram: ({ className }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
    </svg>
  ),
};

const ContactInfo = () => {
  return (
    <Reveal delay={0.1}>
      <div className="flex flex-col gap-8 lg:pl-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Other ways to reach us
          </h2>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">
            Prefer email or a call? We&apos;re based in Chennai and reply within one
            business day.
          </p>
        </div>

        <ul className="flex flex-col gap-6">
          <li className="flex items-start gap-4">
            <MapPin className="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden />
            <div>
              <p className="text-sm font-medium text-foreground">Office</p>
              <p className="text-sm text-muted-foreground">{CONTACT.address}</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <Mail className="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden />
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {CONTACT.email}
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <Phone className="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden />
            <div>
              <p className="text-sm font-medium text-foreground">Phone</p>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {CONTACT.phone}
              </a>
            </div>
          </li>
        </ul>

        <div>
          <p className="text-sm font-medium text-foreground">Follow us</p>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label];
              return (
                <Link
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {Icon ? <Icon className="size-4" /> : null}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ContactInfo;
