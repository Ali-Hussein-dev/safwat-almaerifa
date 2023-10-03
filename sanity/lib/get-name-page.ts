import { type NamePage } from "@/types/name-project";
import { client } from "./client";

export async function getNamePage(slug: string): Promise<NamePage[]> {
    return client.fetch(
        `*[_type == "page" && slug.current == $slug]{
      _id,
      title,
      description,
      "slug": slug.current,
      content
    }`,
        { slug },
    );
}

export async function getAllPages(): Promise<Omit<NamePage, "content">[]> {
    return client.fetch(
        `*[_type == "page"]{
            _id,
            title,
            key,
            description,
            "slug": slug.current,
    }`,
    );
}
