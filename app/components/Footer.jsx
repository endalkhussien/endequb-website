import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Savings products", href: "/services" },
  { label: "Micro & SME loans", href: "/services" },
  { label: "Digital channels", href: "/services" },
  { label: "Financial coaching", href: "/services" },
];

const cooperativeLinks = [
  { label: "Become a member", href: "/join" },
  { label: "Locate a branch", href: "/branches" },
  { label: "About EndeEqub", href: "/#about" },
  { label: "Contact support", href: "/contact" },
];

const supportDetails = [
  { label: "Customer care", value: "Mon – Sat, 8:00 – 19:00" },
  { label: "WhatsApp", value: "+251 91 200 3344" },
  { label: "National Bank license", value: "Cooperative License No. 044/2010" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold" data-testid="text-footer-brand">
              EndeEqub Cooperative
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Member-owned Sacco delivering trusted savings, credit, and digital financial access rooted in Ethiopia’s
              equb heritage.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com/EndeEqub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                aria-label="EndeEqub on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/EndeEqub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                aria-label="EndeEqub on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/EndeEqub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                aria-label="EndeEqub on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-emerald-200" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Cooperative</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {cooperativeLinks.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-emerald-200" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Talk to us</h4>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-slate-100">Email</p>
                  <a href="mailto:hello@endeequb.et" className="transition hover:text-emerald-200">
                    hello@endeequb.et
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-slate-100">Call us</p>
                  <a href="tel:+251116556600" className="transition hover:text-emerald-200">
                    +251 11 655 6600
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-slate-100">Head office</p>
                  <p>Addis Ababa, Piassa, Menelik II Ave<br />Lideta Cooperative Building, 6th Floor</p>
                </div>
              </li>
              {supportDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-200">{item.label}</p>
                    <p className="text-sm text-slate-300">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:grid-cols-2">
          <p data-testid="text-copyright">© 2025 EndeEqub Cooperative. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link className="transition hover:text-emerald-200" href="/privacy">
              Privacy policy
            </Link>
            <Link className="transition hover:text-emerald-200" href="/terms">
              Terms of service
            </Link>
            <Link className="transition hover:text-emerald-200" href="/disclosures">
              Regulatory disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
