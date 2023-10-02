import { type PortableTextBlock } from "sanity";
export type NamePage = {
    _id: string;
    _createdAt: string;
    title: string;
    key: string;
    description: string;
    slug: string;
    content: PortableTextBlock;
}