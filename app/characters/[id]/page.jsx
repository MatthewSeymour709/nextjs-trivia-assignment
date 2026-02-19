import Character from "@/components/Character";

export default async function CharacterDetails(props) {
    const { id } = await props.params;
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch character details");
    }

    const character = await response.json();

    return (
        <div>
            <Character
                name={character.name}
                species={character.species}
                image={character.image}
            />
        </div>
    );
}