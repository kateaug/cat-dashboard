import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.CAT_API_KEY!,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}