import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server'
 
export async function GET() {
  const { rows } = await sql`SELECT * FROM song ORDER BY name;`;
  return NextResponse.json(rows)
}