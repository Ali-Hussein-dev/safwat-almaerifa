import { type TypedObject } from "sanity";
import { client } from "./client";

type StraightPath = {
    _id: string;
    mainTitle: string;
    leftContent: TypedObject[];
    rightContent: TypedObject[];
    middleContent: TypedObject[];
}
export async function getStraightPathTitles(): Promise<StraightPath[]> {
    return client.fetch(`*[_type == "straightPath"]{
        _id,
        mainTitle,
        leftContent,
        rightContent,
        middleContent,
    }`);
}
