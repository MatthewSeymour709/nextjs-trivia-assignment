import Link from "next/link";

export default async function CharactersPage() {
    return (
        <nav>
            <div >
                <Link href="/" >
                    Home
                </Link>
                <Link href="/characters" >
                    Characters
                </Link>
            </div>
        </nav>
    );
}