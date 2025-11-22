'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/Button";

const joinSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number is required"),
  branch: z.string().min(2, "Please select a preferred branch"),
});

type JoinFormData = z.infer<typeof joinSchema>;

export default function JoinForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JoinFormData>({ resolver: zodResolver(joinSchema) });

  const onSubmit = async (data: JoinFormData) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit application");

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
          placeholder="e.g. Amanuel Bekele"
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
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="+251 9..."
            {...register("phone")}
          />
          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Preferred branch</label>
        <select
          className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-1 focus-visible:ring-ring"
          defaultValue=""
          {...register("branch")}
        >
          <option value="" disabled>
            Select a branch
          </option>
          <option value="addis">Addis Ababa</option>
          <option value="bahir-dar">Bahir Dar</option>
          <option value="hawassa">Hawassa</option>
          <option value="mekelle">Mekelle</option>
        </select>
        {errors.branch && <p className="text-sm text-destructive mt-1">{errors.branch.message}</p>}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {status === "success" && <p className="text-sm text-green-600">Application submitted! We will reach out soon.</p>}
        {status === "error" && (
          <p className="text-sm text-destructive">Something went wrong. Please try again or call your nearest branch.</p>
        )}
        <Button type="submit" disabled={isSubmitting} className="sm:ml-auto">
          {isSubmitting ? "Submitting..." : "Submit application"}
        </Button>
      </div>
    </form>
  );
}

