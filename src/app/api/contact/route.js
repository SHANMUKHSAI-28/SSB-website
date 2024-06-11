// src/app/api/contact/route.js
export async function POST(req) {
  const { name, email, message } = await req.json();

  // Add your logic here, like saving to a database or sending an email
  console.log('Contact Form Data:', { name, email, message });

  return new Response(JSON.stringify({ message: 'Form submission received' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
