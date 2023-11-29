import type { TypedObject } from "sanity"
import { client } from "./client"

type Ruiner = {
    title: string
    description: string
    slug: string
    content: TypedObject[]
    _updatedAt: Date
    order: number
}

export const getRuiners = async (): Promise<Omit<Ruiner, "content">[]> => {
    return client.fetch(`*[_type == "ruiners"] {
        title,
        description,
        order,
        "slug": slug.current
    }`)
}


export const getRuinerPage = async (slug: string): Promise<Pick<Ruiner, "content" | "title" | "_updatedAt">> => client.fetch(`*[_type == "ruiners" && slug.current == $slug][0] {
    title,
    content,
    _updatedAt
}`, { slug })