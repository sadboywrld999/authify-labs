import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // TODO: Wire to email service (SES/Resend/Nodemailer) to send to admin@authify.tech
    // For now, logging the contact lead with all fields including phone
    console.log("Contact lead for admin@authify.tech:", { 
      name, 
      email, 
      phone, 
      company, 
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}


