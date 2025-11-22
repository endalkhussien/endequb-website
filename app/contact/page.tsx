import { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | EndeEqub Cooperative",
  description: "Reach out to EndeEqub Cooperative for support or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="font-serif font-bold text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-muted-foreground mt-3">
            Our team is ready to help with membership, services, or community partnerships.
          </p>
        </header>

        <ContactForm />
      </div>
    </main>
  );
}

