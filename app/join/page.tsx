import { Metadata } from "next";
import JoinForm from "./join-form";

export const metadata: Metadata = {
  title: "Join | EndeEqub Cooperative",
  description: "Apply to become a member of the EndeEqub Cooperative.",
};

export default function JoinPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="font-serif font-bold text-4xl md:text-5xl">Join EndeEqub</h1>
          <p className="text-muted-foreground mt-3">
            Fill in your details and we will get back to you with next steps.
          </p>
        </header>

        <JoinForm />
      </div>
    </main>
  );
}
