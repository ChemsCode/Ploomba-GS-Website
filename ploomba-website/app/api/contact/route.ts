import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Get the API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the shape of the data we expect
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const body = await request.json();

    // 1. Validate the data
    const validation = formSchema.safeParse(body);
    if (!validation.success) {
      console.error('Validation failed:', validation.error);
      return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });
    }
    
    const { name, email, company, message } = validation.data;

    // 2. Send the email
    const { data, error } = await resend.emails.send({
      from: 'Ploomba Demo Request <onboarding@resend.dev>', // Change this to your verified domain
      to: 'grffnstudios@gmail.com', // For testing - change to your verified domain email in production
      replyTo: email, // Set the reply-to as the user's email
      subject: `New Demo Request from ${name}${company ? ` at ${company}` : ''}`,
      html: `<p>You received a new demo request:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Company:</strong> ${company || 'Not provided'}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
    }

    // 3. Send a success response
    console.log('Email sent successfully:', data);
    return NextResponse.json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'An error occurred.' }, { status: 500 });
  }
}
