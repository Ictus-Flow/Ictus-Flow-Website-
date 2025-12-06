import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormData } from '@/types';

/**
 * Contact form API endpoint
 * POST /api/contact
 *
 * Production Implementation Notes:
 * - Currently logs to console (development only)
 * - To make production-ready, integrate with:
 *   - Resend (recommended): https://resend.com
 *   - SendGrid: https://sendgrid.com
 *   - Postmark: https://postmarkapp.com
 *   - Or save to database for manual follow-up
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.email || !body.inquiry) {
      return NextResponse.json(
        { error: 'Email and inquiry type are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate inquiry type
    const validInquiries = ['strategy', 'training', 'pilot', 'general'];
    if (!validInquiries.includes(body.inquiry)) {
      return NextResponse.json(
        { error: 'Invalid inquiry type' },
        { status: 400 }
      );
    }

    // TODO: Replace with actual email service integration
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'noreply@ictusflow.com',
    //   to: 'contact@ictusflow.com',
    //   subject: `New ${body.inquiry} Inquiry`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Inquiry Type:</strong> ${body.inquiry}</p>
    //     <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
    //   `
    // });

    // TODO: Implement email service and database logging
    // Submission data will be used by email/logging service when implemented
    void {
      email: body.email,
      inquiry: body.inquiry,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully'
      },
      { status: 200 }
    );

  } catch {
    // Error handled - return generic message to prevent info leakage
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Reject other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
