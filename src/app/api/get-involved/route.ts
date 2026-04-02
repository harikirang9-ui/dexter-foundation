import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY!,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, countryCode, phoneNumber, contribution, howKnow, message } = body;

    if (!fullName || !email || !phoneNumber || !contribution) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const contributionLabel = contribution === "monetary" ? "Monetary Contribution" : "Shramdaan";

    const htmlContent = `
      <p>Hello Team,</p>
      <p>A new contribution has been submitted through the Dexter Foundation website. Details are as follows:</p>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Full Name</td><td style="padding:8px;border:1px solid #ddd;">${fullName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${countryCode} ${phoneNumber}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Contribution Type</td><td style="padding:8px;border:1px solid #ddd;">${contributionLabel}</td></tr>
        ${howKnow ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">How They Know Us</td><td style="padding:8px;border:1px solid #ddd;">${howKnow}</td></tr>` : ""}
        ${message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>` : ""}
      </table>
    `;

    const recipients = process.env.CONTACT_EMAILS!.split(",").map((e) => e.trim());

    await transporter.sendMail({
      from: process.env.SENDGRID_FROM_EMAIL!,
      to: recipients.join(", "),
      subject: `New Contribution Submission Received - ${fullName}`,
      html: htmlContent,
    });

    return Response.json({ success: true });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Email error:", errMsg);
    return Response.json({ error: errMsg }, { status: 500 });
  }
}
