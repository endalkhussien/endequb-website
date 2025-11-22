'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/Button";

const contactSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-card border rounded-lg p-6 space-y-5">
      <div>
        <label className="block text-sm font-medium mb-2">Full name</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-1 focus-visible:ring-ring"
          placeholder="e.g. Almaz Bekele"
          {...register("fullName")}
        />
        {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Subject</label>
          <input
            className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Membership, services..."
            {...register("subject")}
          />
          {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-1 focus-visible:ring-ring"
          rows={5}
          placeholder="Tell us how we can help..."
          {...register("message")}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {status === "success" && <p className="text-sm text-green-600">Message sent! We will reply soon.</p>}
        {status === "error" && (
          <p className="text-sm text-destructive">Something went wrong. Please try again or call your nearest branch.</p>
        )}
        <Button type="submit" disabled={isSubmitting} className="sm:ml-auto">
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}

