import { type NextRequest, NextResponse } from "next/server";

const API_BASE = "https://nextjs-alura-teste.vercel.app/api";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ all: string[] }> },
) {
  const { all } = await context.params;

  const path = all.join("/");
  const url = `${API_BASE}/${path}${req.nextUrl.search}`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
