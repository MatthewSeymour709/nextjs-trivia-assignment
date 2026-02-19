import Link from "next/link";

export default async function CharactersPage() {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
        throw new Error("Failed to fetch characters");
    }

    const data = await response.json();
    const characters = data.results;

    return (
        <div>
            <h1>Characters Page</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <Link href={`/characters/${character.id}`}>
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}