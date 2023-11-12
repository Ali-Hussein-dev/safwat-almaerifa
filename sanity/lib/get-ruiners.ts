import type { TypedObject } from "sanity"
import { client } from "./client"

type Ruiner = {
    title: string
    description: string
    slug: string
    content: TypedObject[]
}

export const getRuiners = async (): Promise<Omit<Ruiner, "content">[]> => {
    return client.fetch(`*[_type == "ruiners"]  | order(slug.current asc) {
        title,
        description,
        "slug": slug.current
    }`)
}


export const getRuinerPage = async (slug: string): Promise<Pick<Ruiner, "content" | "title">> => client.fetch(`*[_type == "ruiners" && slug.current == $slug][0] {
    title,
    content
}`, { slug })