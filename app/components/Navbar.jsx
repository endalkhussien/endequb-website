'use client'; 

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/20 backdrop-blur-md border-b border-white"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            {/* accessible skip link */}
            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-background px-3 py-2 rounded-md z-50">
              Skip to content
            </a>

            {/* logo + title (explicit size for the logo, more readable click target) */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3"
              aria-label="EndeEqub home"
              data-testid="link-logo"
            >
              <img 
                src="/images/endequb.jpg"
                alt="EndeEqub logo"
                width={70}
                height={70}
                className="h-12 w-12 rounded-md object-cover"
              />
              <span
                className="md:hidden text-lg font-thick tracking-tight ende-equb-text"
                style={{
                  fontFamily:
                    'EndeEqub, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                EndeEqub
              </span>
              <span className="hidden md:inline-block text-lg font-thick tracking-tight">
                <style jsx global>{`
                  @font-face {
                    font-family: 'EndeEqub';
                    // src: url('/fonts/EndeEqub.woff2') format('woff2');
                    font-weight: 100 900;
                    font-style: normal;
                    font-display: swap;
                  }

                  .ende-equb-text {
                    font-family: 'EndeEqub', sans-serif;
                  }

                  .font-thick.tracking-tight {
                    font-family: 'EndeEqub', sans-serif;
                  }
                `}</style>
                EndeEqub
              </span>
            </Link>

            {/* subtle separator to visually balance the logo and controls */}
            
          </div>
         
      

          <div className="hidden md:flex items-center gap-8">
            <Link
            href="/services"
            className="text-lg font-medium text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all"
            data-testid="link-services"
            >
              Services
            </Link>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-lg font-medium text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all"
              data-testid="link-impact"
            >
              Impact
            </button>
            <Link
              href="/about"
              className="text-lg font-medium text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all"
              data-testid="link-about"
            >
              About
            </Link>
            <Link
            href="/testimonials"
              onClick={() => scrollToSection("testimonials")}
              className="text-lg font-medium text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all"
              data-testid="link-testimonials"
            >
              Testimonials
            </Link>
            <Button
              onClick={() => scrollToSection("join")}
              variant= "default"
              data-testid="button-join-now"
            >
              Join Now
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-6 py-4 space-y-3">
            <Link
            href="/services"
            className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="mobile-link-services"
            >
              Services
            </Link>
            <Link
              href = "/impact"
              className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="impact"
            >
              Impact
            </Link>
            <Link
            href="/about"
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="mobile-link-about"
            >
              About
            </Link>
            <Link
            href="/testimonials"
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="mobile-link-testimonials"
            >
              Testimonials
            </Link>
            <Button
              onClick={() => scrollToSection("join")}
              className="w-full"
              data-testid="mobile-button-join-now"
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}