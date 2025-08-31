import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT id, name, address, city, image FROM schools"
    );
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
