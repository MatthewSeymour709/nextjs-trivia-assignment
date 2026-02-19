import Image from "next/image";

export default async function Character({ name, species, image }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Species: {species}</p>
            <Image src={image} alt={name} width={400} height={400} />
        </div>
    );
}