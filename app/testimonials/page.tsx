export default function Testimonials() {
  const items = [
    {
      name: "Alemu T.",
      role: "Member since 2021",
      quote:
        "EndeEqub has transformed the way I manage my savings and loans. The app is user-friendly and the cooperative's support is outstanding.",
    },
    {
      name: "Mekdes S.",
      role: "Member since 2020",
      quote:
        "Joining EndeEqub was the best decision for my financial health. The community-driven approach makes saving enjoyable and stress-free.",
    },
    {
      name: "Yared K.",
      role: "Member since 2022",
      quote:
        "The digital tools make it easy to track contributions and loans. EndeEqub truly modernized our cooperative experience.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-slate-900">
            What Members Are Saying
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Real stories from members building financial strength with EndeEqub.
          </p>
        </header>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, index) => (
            <article
              key={index}
              className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-shadow"
            >
              <p className="text-sm text-slate-700 leading-relaxed">
                “{t.quote}”
              </p>

              <footer className="mt-6">
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
