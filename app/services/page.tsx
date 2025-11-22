export default function Services() {
  const services = [
    {
      title: "Savings Products",
      points: [
        "Flexible payroll-based savings",
        "Youth & education saving plans",
        "Group savings for cooperatives",
      ],
    },
    {
      title: "Loans With Purpose",
      points: [
        "Salary advance starting at 5% interest",
        "Inventory & equipment financing",
        "Seasonal agriculture loans",
      ],
    },
    {
      title: "Digital Banking",
      points: [
        "USSD (*775#)",
        "EndeEqub mobile app",
        "WhatsApp mini statements",
        "Instant wallet transfers",
      ],
    },
    {
      title: "Financial Guidance",
      points: [
        "On-site financial literacy",
        "Business advisory clinics",
        "Community empowerment programs",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Products & Support
          </span>

          <h2 className="mt-4 font-serif text-4xl font-bold text-slate-900">
            Everything a Sacco Member Needs in One Place
          </h2>

          <p className="mt-4 text-base text-muted-foreground">
            Modern tools blended with cooperative trust. Savings, loans,
            digital access — all built to strengthen members.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, idx) => (
            <article
              key={idx}
              className="rounded-3xl border border-emerald-600 bg-white p-8 shadow-lg shadow-emerald-700/10 hover:shadow-emerald-500/20 transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {service.title}
              </h3>

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
