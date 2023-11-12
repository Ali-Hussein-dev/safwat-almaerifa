import { client } from "./client";

type Doc = "page" | "quranTopics" | "SimilarNamesSchema" | "ruiners";

export const getPageTitle = (doc: Doc, slug: string): Promise<{ title: string }> => client.fetch(`*[_type == "${doc}" && slug.current == "${slug}"][0]{
    title
}`)
