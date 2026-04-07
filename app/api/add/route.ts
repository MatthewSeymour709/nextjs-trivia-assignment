import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

type CharacterInput = {
  id?: number;
  name?: string;
  species?: string;
  image?: string;
};

export async function POST(request: Request) {
  try {
    const body: CharacterInput = await request.json();

    if (!body.name || !body.species || !body.image) {
      return NextResponse.json(
        { error: "name, species, and image are required" },
        { status: 400 }
      );
    }

    const db = await getDb();

    const newCharacter = {
      ...(typeof body.id === "number" ? { id: body.id } : {}),
      name: body.name,
      species: body.species,
      image: body.image,
    };

    const result = await db.collection("characters").insertOne(newCharacter);

    return NextResponse.json(
      {
        message: "Character added successfully",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add character" },
      { status: 500 }
    );
  }
}