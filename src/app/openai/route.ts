import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const response = await fetch(`${process.env.OpenAI_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from OpenAI');
    }

    const data = await response.json();

    return new NextResponse(JSON.stringify({ message: data.choices[0].message.content }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}