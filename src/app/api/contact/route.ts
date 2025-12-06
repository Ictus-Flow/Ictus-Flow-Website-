import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormData } from '@/types';
import { sendContactNotification } from '@/lib/email';

/**
 * Contact form API endpoint
 * POST /api/contact
 *
 * Sends email notification via Resend when someone submits the contact form.
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

    // Prepare submission data
    const submissionData = {
      email: body.email,
      inquiry: body.inquiry,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      await sendContactNotification(submissionData);
    }

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
