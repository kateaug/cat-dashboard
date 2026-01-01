import { NextResponse } from "next/dist/server/web/spec-extension/response";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const breed = searchParams.get('breed');

  if (!breed) {
    return NextResponse.json(null);
  }

  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`,
    {
      headers: {
        'x-api-key': process.env.CAT_API_KEY!,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(null);
  }

  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    return NextResponse.json(null);
  }

  return NextResponse.json({ url: data[0].url });
}