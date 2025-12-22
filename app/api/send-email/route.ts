import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // ✅ ENV safety check
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "RESEND_API_KEY is missing" },
        { status: 500 }
      );
    }

    // ✅ Initialize Resend INSIDE function
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, contact, message } = await req.json();

    // ✅ Validation
    if (!name || !email || !contact || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Send email
    await resend.emails.send({
      from: "Efficient Tech <support@effiicienttech.com>",
      to: "efficientstech@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);

    return Response.json(
      { success: false, error: "Email failed to send" },
      { status: 500 }
    );
  }
}

// ✅ Prevent caching
export const dynamic = "force-dynamic";
