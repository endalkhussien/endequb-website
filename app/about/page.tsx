import { Building, PiggyBank, ShieldCheck, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | EndeEqub Cooperative",
  description: "Learn about the history and mission of EndeEqub Cooperative.",
};
const pillars = [
  {
    title: "Inclusive membership",
    description:
      "Salary earners, business owners, cooperatives, and farmers can select plans that match their cashflow.",
    icon: Users,
  },
  {
    title: "Sustainable finance",
    description:
      "Loans are funded directly by member savings, keeping rates fair and profits circulating in local economies.",
    icon: PiggyBank,
  },
  {
    title: "Transparent governance",
    description:
      "An elected board, independent audit committee, and quarterly member meetings ensure accountability.",
    icon: ShieldCheck,
  },
];

const commitments = [
  "Digital-first access, with personal support in each branch.",
  "Clear pricing reviewed and approved annually by members.",
  "Financial education integrated into every service.",
];

export default function About() {
  return (
    <section id="about" className="py-40 bg-white text-slate-900" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <header className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              About EndeEqub Cooperative
            </span>
            <h2 id="about-title" className="mt-4 font-serif text-4xl font-bold text-slate-900">
              A Sacco tailored to the realities of Ethiopia’s workers.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Since 2010 we have helped members build disciplined savings, secure responsible credit, and access
              financial education that strengthens families and businesses. Our hybrid model blends trusted equb-style
              solidarity with the regulatory rigor of a modern cooperative.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">Cooperative by the numbers</p>
                <p className="text-lg font-semibold text-slate-900">2024 snapshot</p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="rounded-2xl border border-emerald-300 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-emerald-700">Member savings</dt>
                <dd className="mt-2 text-xl font-semibold text-emerald-800">Br 45M+</dd>
                <p className="mt-1 text-xs text-muted-foreground">Average annual dividend 8.2%</p>
              </div>
              <div className="rounded-2xl border border-emerald-300 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-emerald-700">Loans disbursed</dt>
                <dd className="mt-2 text-xl font-semibold text-emerald-800">6,200</dd>
                <p className="mt-1 text-xs text-muted-foreground">97% repayment rate</p>
              </div>
              <div className="rounded-2xl border border-emerald-300 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-emerald-700">Branches & agents</dt>
                <dd className="mt-2 text-xl font-semibold text-emerald-800">32</dd>
                <p className="mt-1 text-xs text-muted-foreground">Amhara, Oromia, SNNP, Tigray</p>
              </div>
              <div className="rounded-2xl border border-emerald-300 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-emerald-700">Member satisfaction</dt>
                <dd className="mt-2 text-xl font-semibold text-emerald-800">4.8 / 5</dd>
                <p className="mt-1 text-xs text-muted-foreground">Surveyed Q4 2024</p>
              </div>
            </dl>
          </div>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-600">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
