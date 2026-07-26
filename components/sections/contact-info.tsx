import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Icons } from "@/components/ui/flickering-footer";
import { CONTACT, SOCIALS } from "@/lib/site";

type SocialIcon = (props: { className?: string }) => React.ReactNode;

const SOCIAL_ICONS: Record<string, SocialIcon> = {
  LinkedIn: Icons.linkedin,
  Instagram: Icons.instagram,
  Facebook: Icons.facebook,
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
