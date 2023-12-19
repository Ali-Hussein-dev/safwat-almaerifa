import { type TypedObject } from "sanity";
import { client } from "./client";

export type StaticPage = {
    title: string;
    // description: string;
    content: TypedObject[];
    _updatedAt: Date
};
export async function getStaticPage({
    slug,
}: {
    slug: string;
}): Promise<StaticPage> {
    return client.fetch(
        `*[_type == "staticPages" && slug.current == $slug][0] {
        title,
        content,
        _updatedAt
    }`,
        { slug },
    );
}
