import Image from "next/image";
import {client} from "@/sanity/lib/client.js"
import { defineQuery } from "next-sanity";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";


const myPortableTextComponents = {
  types: {
    image: ({ value }) => <img src={urlFor(value).url()} />,
  },
};


export default async function Home() {
  const GREETING_QUERY = defineQuery("*[_type=='greetingItem']{content}")

  const greeting = await client.fetch(GREETING_QUERY)

  return (
    <>
      <h2>Rick and Morty Page</h2>
      <p>Welcome to the page, checkout some of the characters</p>
      <p>small change to test if netlify triggers a deploy on a push</p>
      <Image alt="Eric" src="/Eric.jpg" width={200} height={200}></Image>
      {greeting.map((item, index) => (
        <PortableText key={index} value={item.content} components={myPortableTextComponents} />
      ))}
    </>
  );
}
