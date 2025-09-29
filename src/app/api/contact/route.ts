import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

    // Log the contact lead for debugging
    console.log("Contact lead received:", { 
      name, 
      email, 
      phone, 
      company, 
      message,
      timestamp: new Date().toISOString()
    });

    // Send email using Resend (if configured)
    if (!resend) {
      console.log('Resend not configured - email not sent. Set RESEND_API_KEY environment variable.');
      return NextResponse.json({ 
        ok: true, 
        message: "Thanks! We'll get back within 1 business day." 
      });
    }

    try {
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission - Authify Labs</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3A6D7C; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #3A6D7C; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #3A6D7C; }
            .footer { margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 4px; font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
              <p>Someone is interested in working with Authify Labs!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">📞 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              ${company ? `
              <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p><strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                timeZone: 'UTC',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</p>
              <p><strong>🌐 Source:</strong> Authify Labs Website Contact Form</p>
            </div>
          </div>
        </body>
        </html>
      `;

      // Define multiple recipient emails
      const primaryEmail = process.env.TO_EMAIL || 'ajayvasisht@authify.tech';
      const secondaryEmail = process.env.TO_EMAIL_SECONDARY || 'admin@authify.tech';
      const recipients = [primaryEmail];
      
      // Add secondary email only if it's different from primary
      if (secondaryEmail && secondaryEmail !== primaryEmail) {
        recipients.push(secondaryEmail);
      }

      console.log('Attempting to send to:', recipients);

      const { data, error } = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Authify Labs <onboarding@resend.dev>',
        to: recipients,
        subject: `🚀 New Contact: ${name}${company ? ` from ${company}` : ''}`,
        html: emailHtml,
        replyTo: email,
      });

      if (error) {
        console.error('Resend error:', error);
        
        // If sending to multiple recipients fails, try sending to just the primary email
        if (recipients.length > 1) {
          console.log('Retrying with primary email only:', primaryEmail);
          try {
            const { data: retryData, error: retryError } = await resend.emails.send({
              from: process.env.FROM_EMAIL || 'Authify Labs <onboarding@resend.dev>',
              to: [primaryEmail],
              subject: `🚀 New Contact: ${name}${company ? ` from ${company}` : ''}`,
              html: emailHtml,
              replyTo: email,
            });

            if (retryError) {
              console.error('Retry failed:', retryError);
            } else {
              console.log('Email sent successfully to primary email:', retryData);
              return NextResponse.json({ 
                ok: true, 
                message: "Thanks! We'll get back within 1 business day." 
              });
            }
          } catch (retryEmailError) {
            console.error('Retry attempt failed:', retryEmailError);
          }
        }
        
        // Still return success to user, but log the error
        return NextResponse.json({ 
          ok: true, 
          message: "Thanks! We'll get back within 1 business day." 
        });
      }

      console.log('Email sent successfully to all recipients:', data);
      return NextResponse.json({ 
        ok: true, 
        message: "Thanks! We'll get back within 1 business day." 
      });

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Still return success to user to avoid breaking the form experience
      return NextResponse.json({ 
        ok: true, 
        message: "Thanks! We'll get back within 1 business day." 
      });
    }

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}


