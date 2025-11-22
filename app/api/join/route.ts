import { NextResponse } from "next/server";
import { z } from "zod";

const joinSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(7),
  branch: z.string().min(2),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const parsed = joinSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  // In production, persist to a database or send to a CRM/email queue.
  console.log("Join application received:", parsed.data);

  return NextResponse.json({ ok: true });
}

