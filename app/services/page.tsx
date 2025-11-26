'use client'
import { Car, Home, Wrench, Briefcase, Leaf, Clock } from "lucide-react";

export default function ServiceCatalogPage() {

  const loanServices = [
    {
      title: "Car Loan",
      icon: Car,
      description:
        "Financing for private or business vehicles with flexible repayment options.",
      points: [
        "Up to 80% financing",
        "Employee and business packages",
        "Repayment up to 5 years",
      ],
    },
    {
      title: "House Construction Loan",
      icon: Home,
      description:
        "Support for building, finishing, or expanding residential homes.",
      points: [
        "Stage‑based disbursement",
        "Flexible collateral options",
        "Long‑term repayment plans",
      ],
    },
    {
      title: "Home Renovation Loan",
      icon: Wrench,
      description:
        "Upgrade, repair, or modernize existing homes.",
      points: [
        "Quick approval for small renovations",
        "Affordable interest tiers",
        "Materials and labor coverage",
      ],
    },
    {
      title: "SME Business Loan",
      icon: Briefcase,
      description:
        "Working capital and asset financing for small and growing businesses.",
      points: [
        "Inventory & equipment financing",
        "Seasonal cash‑flow support",
        "Designed for traders and service providers",
      ],
    },
    {
      title: "Agriculture Loan",
      icon: Leaf,
      description:
        "Support for farmers and cooperatives across seasonal cycles.",
      points: [
        "Oxen, poultry & dairy financing",
        "Seed, input & irrigation packages",
        "Grace period options",
      ],
    },
    {
      title: "Emergency / Salary Loan",
      icon: Clock,
      description:
        "Short‑term support for unexpected expenses, payroll gaps, or urgent needs.",
      points: [
        "Fast approval",
        "Up to 3‑month repayment",
        "Affordable small‑ticket lending",
      ],
    },
  ];

  return (
    <section id="service-page" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Our Services
          </span>

          <h2 className="mt-4 font-serif text-4xl font-bold text-slate-900">
            Loan Services Tailored for Ethiopian Members
          </h2>

          <p className="mt-4 text-base text-muted-foreground">
            Practical, culturally‑aligned financial solutions for everyday needs: homes,
            vehicles, businesses, farming, and life’s surprises.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loanServices.map((service, idx) => (
            <article
              onClick={() => console.log(`Clicked: ${service.title}`)}
              key={idx}
              className="rounded-3xl border border-emerald-600 bg-white p-8 shadow-lg shadow-emerald-700/10 hover:shadow-emerald-500/20 transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-700" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
