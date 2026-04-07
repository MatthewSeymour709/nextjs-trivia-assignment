import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const characters = await db
      .collection("characters")
      .find({})
      .project({ _id: 0 })
      .toArray();
    console.log("Fetched characters:", characters);
    return NextResponse.json(characters, { status: 200 });
  } catch (error) {
    console.log("Error fetching characters:", error);
    return NextResponse.json(
      { error: "Failed to fetch characters" },
      { status: 500 }
    );
  }
}