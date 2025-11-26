'use client';
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { Button } from "./components/ui/Button";

const serviceHighlights = [
  {
    title: "Savings products",
    points: ["Flexible payroll savings", "Youth & education plans", "Group savings for cooperatives"],
  },
  {
    title: "Loans with purpose",
    points: ["Salary advance from 5% interest", "Inventory and equipment finance", "Seasonal agriculture loans"],
  },
  {
    title: "Digital banking",
    points: ["USSD (*775#)", "EndeEqub mobile app", "WhatsApp mini statements", "Instant wallet transfers"],
  },
  {
    title: "Financial guidance",
    points: ["On-site financial literacy", "Business advisory clinics", "Community empowerment programs"],
  },
];

const memberSegments = [
  {
    title: "Salary earners",
    description: "Simple payroll deductions, emergency loans, and goal-based savings for households.",
  },
  {
    title: "Micro & small enterprises",
    description: "Working-capital financing, inventory restocking support, and business coaching.",
  },
  {
    title: "Agricultural cooperatives",
    description: "Seasonal credit with grace periods, bulk input purchases, and tailored insurance links.",
  },
];

const membershipSteps = [
  { step: "1", title: "Apply online or in-branch", text: "Complete a short form and present ID & employment reference." },
  { step: "2", title: "Activate your savings plan", text: "Choose contribution frequency and fund your share capital." },
  { step: "3", title: "Access loans & services", text: "Build savings history, unlock credit, and join capacity sessions." },
];

const impactHighlights = [
  { label: "Birr in active savings", value: "Br 45M+" },
  { label: "Loans disbursed in 2024", value: "6,200" },
  { label: "Branches & mobile agents", value: "32" },
  { label: "Member satisfaction score", value: "4.8 / 5" },
];

const testimonials = [
  {
    name: "Samrawit M.",
    role: "Micro-entrepreneur • Addis Ababa",
    quote:
      "EndeEqub financed my tailoring shop when commercial banks said no. I now employ three women and still contribute to my savings circle every month.",
  },
  {
    name: "Hirut G.",
    role: "Teacher • Bahir Dar",
    quote:
      "The cooperative’s payroll savings and emergency loan helped my family cover medical costs without turning to loan sharks.",
  },
  {
    name: "Mikias T.",
    role: "Farmer • Hawassa",
    quote:
      "Seasonal income is unpredictable. The coop gave us flexible repayment schedules and agronomy training so our farms can thrive.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Products & support
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-slate-900">Everything a Sacco member needs in one place</h2>
            <p className="mt-4 text-base text-muted-foreground">
              We combine traditional group savings discipline with modern digital convenience so your money is secure,
              accessible, and working for your goals.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceHighlights.map((service) => (
              <article key={service.title} className="rounded-3xl border border-border  border-emerald-950 bg-card shadow-lg shadow-emerald-500/20 p-8">
                <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
            <div>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Who we serve
              </span>
              <h2 className="mt-4 font-serif text-4xl font-bold text-slate-900">Members from every walk of life</h2>
              <p className="mt-4 text-base text-muted-foreground">
                EndeEqub connects people who want predictable savings and responsible credit. We partner with employers,
                cooperatives, and development programs to meet members where they are.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {memberSegments.map((segment) => (
                <article key={segment.title} className="rounded-2xl border border-border  border-emerald-400 bg-card p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">{segment.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{segment.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <header className="text-center">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Membership
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-slate-900">Simple steps to join EndeEqub</h2>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {membershipSteps.map((step) => (
              <article key={step.step} className="rounded-2xl border border-border  border-emerald-950 bg-card p-6 text-center shadow-sm">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Testimonials />
       </div> 
      
      <section id="impact" className="py-24 bg-emerald-950">
        <div className="mx-auto max-w-7xl px-6 text-slate-100 lg:px-8">
          <header className="text-center">
            <span className="inline-flex items-center rounded-full bg-emerald-700/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
              Cooperative impact
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold">We grow by lifting members together</h2>
            <p className="mt-4 text-base text-emerald-100/80">
              Savings and interest earned stay within the cooperative. Surplus is reinvested into digital access,
              education, and community resilience.
            </p>
          </header>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {impactHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-emerald-800 bg-emerald-900/40 p-6 text-center">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-emerald-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="join" className="py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-emerald-200 bg-emerald-950 px-6 py-16 text-center shadow-lg shadow-emerald-100/50 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-white">Ready to open your EndeEqub account?</h2>
          <p className="mt-4 text-base text-white">
            Complete the membership form and our onboarding team will contact you within one business day. We can also
            run orientation sessions for your workplace or cooperative.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" variant="default" data-testid="button-join" onClick={() => (window.location.href = "/join")}>
              Apply for membership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-300 text-white "
              data-testid="button-contact"
              onClick={() => (window.location.href = "/contact")}
            >
              Request an orientation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
