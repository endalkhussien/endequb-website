'use client';
import Image from 'next/image';
import { Button } from "./ui/Button";
import Link from 'next/link';
import { useEffect } from "react";
/**
 * Small DOM enhancement script for the Hero CTAs:
 * - Adds subtle motion & focus styles
 * - Appends compact SVG icons to the primary & secondary CTAs
 * - Improves accessible labels
 *
 * This runs on the client when the module loads.
 */
if (typeof window !== "undefined") {
  const insertStyles = () => {
    if (document.getElementById("endequb-hero-styles")) return;
    const style = document.createElement("style");
    style.id = "endequb-hero-styles";
    style.textContent = `
      .endequb-hero button, .endequb-hero a[role="button"], .endequb-hero a[href] {
        transition: transform .18s ease, box-shadow .18s ease, opacity .12s;
        will-change: transform;
        user-select: none;
      }
      .endequb-hero .primary-cta {
        position: relative;
        overflow: hidden;
      }
      .endequb-hero .primary-cta:active { transform: translateY(1px) scale(.997); }
      .endequb-hero .secondary-cta { opacity: .98; }
      .endequb-hero .cta-icon {
        display: inline-block;
        margin-left: .6rem;
        vertical-align: middle;
        transition: transform .18s ease;
      }
      .endequb-hero button:hover .cta-icon, .endequb-hero a:hover .cta-icon { transform: translateX(4px); }
      .endequb-hero .primary-cta:focus { box-shadow: 0 0 0 4px rgba(16,185,129,.12); outline: none; }
      .endequb-hero .cta-badge {
        display:inline-flex;
        align-items:center;
        gap:.35rem;
        font-size:.75rem;
        margin-left:.6rem;
        padding:.16rem .45rem;
        border-radius:9999px;
        background: rgba(255,255,255,.06);
        color: rgba(255,255,255,.95);
      }
    `;
    document.head.appendChild(style);
  };

  const enhanceHero = () => {
    const hero = document.querySelector("section.bg-emerald-800");
    if (!hero) return;
    hero.classList.add("endequb-hero");

    insertStyles();

    const ctas = Array.from(
      hero.querySelectorAll("button, a[href], [role='button']")
    ).filter((el) => el.closest("aside") === null); // prefer hero CTAs, skip image/card controls

    if (ctas.length === 0) return;

    const primary = ctas[0];
    const secondary = ctas[1];

    const makeIcon = (type) => {
      if (type === "chev") {
        return `<svg class="svg-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M10 17l5-5-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      }
      return `<svg class="svg-inline" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M12 12v.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.07 8.21a1.5 1.5 0 112.86 0c0 .8-.36 1.2-.9 1.57-.6.4-1.2.83-1.2 1.95" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    };

    const enhance = (el, { roleClass, iconType, badgeText } = {}) => {
      if (!el || el.dataset.endequbEnhanced) return;
      el.dataset.endequbEnhanced = "1";
      el.classList.add(roleClass);
      // set ARIA label if missing
      if (!el.getAttribute("aria-label")) {
        const text = (el.textContent || "").trim();
        if (text) el.setAttribute("aria-label", text);
      }
      // append icon
      const iconSpan = document.createElement("span");
      iconSpan.className = "cta-icon";
      iconSpan.setAttribute("aria-hidden", "true");
      iconSpan.innerHTML = makeIcon(iconType);
      el.appendChild(iconSpan);
      // optional micro-badge
      if (badgeText) {
        const badge = document.createElement("span");
        badge.className = "cta-badge";
        badge.textContent = badgeText;
        el.appendChild(badge);
      }
      // keyboard: pressing Enter/Space should trigger same behavior (native handles it for buttons/links)
      // add gentle hover scale on pointer devices
      el.addEventListener("pointerenter", () => el.style.transform = "translateY(-2px)");
      el.addEventListener("pointerleave", () => el.style.transform = "");
    };

    enhance(primary, { roleClass: "primary-cta", iconType: "chev", badgeText: "Free" });
    if (secondary) enhance(secondary, { roleClass: "secondary-cta", iconType: "info" });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceHero);
  } else {
    // small timeout to ensure Next/React hydration completed
    setTimeout(enhanceHero, 50);
  }
}
const highlights = [
  { label: "Members", value: "20K+" },
  { label: "Branches & agents", value: "32" },
  { label: "Repayment rate", value: "97%" },
];

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "auto" });
  };

  return (
    <section className="relative overflow-hidden bg-emerald-800">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-90 to-emerald-900" />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center gap-12 px-6 py-40 lg:flex-row lg:items-center lg:px-8">

        {/* Left: Text */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-emerald-700/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
            Member-owned Sacco
          </span>

          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Encourage savings, finance dreams.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-emerald-100/80 sm:text-lg">
            EndeEqub Cooperative helps salary earners, SMEs, cooperatives, and farmers save with confidence, access fair
            credit, and manage money on any device. Every birr saved returns to members through dividends, loans, and
            financial coaching.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-white"
              onClick={() => scrollToSection("join")}
            >
              Become a member
            </Button>

            <Button
              href="#services" 
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-100 hover:bg-emerald-900/50"
            >
              Explore services
              
            </Button>
          </div>
        </div>

        {/* Right: Image + Highlights */}
        <aside className="w-full rounded-3xl border border-emerald-800 bg-emerald-900/40 shadow-xl shadow-emerald-900/40 backdrop-blur">
          <div className="relative w-full h-80">
            <Image
              src="/images/saccos.jpg"
              alt="Members of EndeEqub Cooperative"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl border-emerald-800"
              priority
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
