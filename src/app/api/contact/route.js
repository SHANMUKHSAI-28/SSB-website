// src/app/api/contact/route.js
import connectToDB from '@/lib/dbConnect';
import Contact from '@/models/Contact';

export async function POST(req) {
  const { name, email, message } = await req.json();

  await connectToDB();

  try {
    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    return new Response(JSON.stringify({ message: 'Form submission received' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error saving to database' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
