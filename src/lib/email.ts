import { Resend } from 'resend';

interface ContactEmailData {
  email: string;
  inquiry: string;
  timestamp: string;
  ip: string;
}

const inquiryLabels: Record<string, string> = {
  strategy: 'Strategy Review',
  training: 'Training Workshop',
  pilot: 'Pilot Implementation',
  general: 'General Enquiry'
};

export async function sendContactNotification(data: ContactEmailData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const inquiryLabel = inquiryLabels[data.inquiry] || data.inquiry;

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'Ictus Flow <noreply@ictusflow.com>',
    to: process.env.RESEND_TO_EMAIL || 'gareth@ictusflow.com',
    subject: `New ${inquiryLabel} Enquiry - Ictus Flow`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>

          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b;">Email Address</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${data.email}" style="color: #059669; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b;">Enquiry Type</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="background: #059669; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${inquiryLabel}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b;">Submitted</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  ${new Date(data.timestamp).toLocaleString('en-GB', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                    timeZone: 'Europe/London'
                  })}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0;">
                  <strong style="color: #64748b;">IP Address</strong>
                </td>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 14px;">
                  ${data.ip}
                </td>
              </tr>
            </table>

            <div style="margin-top: 30px; padding: 20px; background: #ecfdf5; border-radius: 8px; border-left: 4px solid #059669;">
              <p style="margin: 0; color: #065f46;">
                <strong>Next step:</strong> Reply to this lead within 24 hours to maximise conversion.
              </p>
            </div>

            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${data.email}?subject=Re: Your Ictus Flow Enquiry"
                 style="display: inline-block; background: #059669; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                Reply to ${data.email.split('@')[0]}
              </a>
            </div>
          </div>

          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            This notification was sent from the Ictus Flow website contact form.
          </p>
        </body>
      </html>
    `
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }

  return { success: true };
}
