import Character from "@/components/Character.jsx"

export async function generateStaticParams() {
    const characterItems = await fetch(
        "https://rickandmortyapi.com/api/character/"
    )
    .then((res) => res.json())
    .then((data) => data.results)
    return characterItems.map((item) => ({ id: `${item.id}` }))
}

export default async function CharacterDetail( props ) {
    const {id} = await props.params;

    const response = await fetch("https://rickandmortyapi.com/api/character/" + id )
    const data = await response.json()
    return (
        <Character name={data.name} species={data.species} imageURL={data.image}/>
    )
}