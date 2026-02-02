import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/validation";
import { siteConfig } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = leadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (parsed.data.honey) {
      return NextResponse.json({ success: true });
    }

    const { honey, ...lead } = parsed.data;

    console.log("New lead", lead);

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const toEmail = process.env.RESEND_TO_EMAIL || siteConfig.email;
      const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

      await resend.emails.send({
        to: toEmail,
        from: fromEmail,
        subject: `New estimate request from ${lead.name}`,
        html: `
          <h2>New Estimate Request</h2>
          <p><strong>Name:</strong> ${lead.name}</p>
          <p><strong>Phone:</strong> ${lead.phone}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p><strong>Project Type:</strong> ${lead.projectType}</p>
          <p><strong>Budget Range:</strong> ${lead.budgetRange || "Not provided"}</p>
          <p><strong>Description:</strong> ${lead.projectDescription}</p>
          <p><strong>Referral Source:</strong> ${lead.referralSource || "N/A"}</p>
        `
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
