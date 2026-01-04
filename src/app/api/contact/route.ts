import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormData } from '@/types';

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxP8cMhHx0zaGCUmn0HFh-UxF2uMUUcdd9AjeF-qnlajD2u0fzrIZ4z8oYGrlKKO0B3/exec';

/**
 * Contact form API endpoint
 * POST /api/contact
 *
 * Saves submissions to Google Sheets via Apps Script.
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.inquiry) {
      return NextResponse.json(
        { error: 'Name, email and inquiry type are required' },
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

    // Map inquiry to readable label
    const inquiryLabels: Record<string, string> = {
      strategy: 'Strategy Review',
      training: 'Training Workshop',
      pilot: 'Pilot Implementation',
      'ictus-apps': 'Ictus Apps',
      other: 'Other',
      general: 'General Enquiry'
    };

    // Prepare submission data matching Google Sheet columns
    const submissionData = {
      timestamp: new Date().toISOString(),
      email: body.email,
      name: body.name,
      phone: body.phone || '',
      company: body.company || '',
      inquiry: inquiryLabels[body.inquiry] || body.inquiry,
      source: 'website'
    };

    // Send to Google Sheets via Apps Script
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      throw new Error('Failed to save to Google Sheets');
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
