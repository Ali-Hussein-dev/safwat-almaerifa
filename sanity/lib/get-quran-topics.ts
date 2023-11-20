import { type TypedObject } from "sanity"

import { client } from "./client";
export type QuranTopic = {
    title: string;
    content: TypedObject;
    order: number;
    description: string;
    _updatedAt: Date;
}
export const getQuranTopicsTitles = async (): Promise<Pick<QuranTopic, "title" | "order" | "description">[]> => await client.fetch(`*[_type == "quranTopics"] | order(order) {
    title, 
    order,
    description
}`)

export const getQuranTopicContent = async (order: number): Promise<QuranTopic> => await client.fetch(`*[_type=="quranTopics" && order == $order][0] {
    title,
    content,
    order,
    _updatedAt
}`, { order })