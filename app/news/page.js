import Image from "next/image"
import { defineQuery } from "next-sanity";
import {client} from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";


export default async function NewsItem() {    
    
    const NEWS_QUERY = defineQuery("*[_type=='newsItem'][0]")

    const newsEntry = await client.fetch(NEWS_QUERY)
    //const newsEntry = newsData.find( (newsItem) => newsItem.id == id)
    console.log(newsEntry)

    if( !newsEntry) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-red-600">News Entry with ID '1' is not available</h2>
            </div>
        )
    }

    const imageURL = urlFor(newsEntry.image).width(300).url()

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{newsEntry.title}</h2>
                <p className="text-gray-700 mb-6">{newsEntry.body}</p>
                <Image alt={newsEntry.title} width={300} height={0} src={imageURL} className="rounded-lg"></Image>
            </div>
        </article>
    )
}