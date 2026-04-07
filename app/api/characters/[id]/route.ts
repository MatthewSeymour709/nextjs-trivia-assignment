import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const numericId = Number(id);

    if (Number.isNaN(numericId)) {
      return NextResponse.json(
        { error: "Invalid character id" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const character = await db.collection("characters").findOne(
      { id: numericId },
      { projection: { _id: 0 } }
    );

    if (!character) {
      return NextResponse.json(
        { error: "Character not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(character, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch character" },
      { status: 500 }
    );
  }
}