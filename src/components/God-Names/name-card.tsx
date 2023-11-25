"use client";
import { useMarked } from "@/hooks/use-mark";
import { type NamePage } from "@/types/name-project";
import Link from "next/link";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import * as React from "react";
const content = {
  read: "اقرأ المزيد",
  nameSuffix: "ﷻ",
};

export function NameCard({
  title,
  description,
  slug,
  _id,
}: Omit<NamePage, "content" | "_createdAt" | "source">) {
  const { setMarked, namesList } = useMarked();
  const marked = !!namesList[_id];
  const onClick = () => {
    setMarked(_id, !marked);
  };
  return (
    <div className="break-inside flex flex-col justify-between rounded-lg border-zinc-100 bg-gradient-to-t from-zinc-100 to-transparent text-zinc-700 shadow-lg duration-300">
      <div className="grow p-4 pt-8">
        <div className="flex-row-between">
          <div className="font-tajawal mb-1 w-full gap-1 font-bold text-primary-600 flex-row-start">
            {title}{" "}
            <span className="mr-1 mt-1 text-2xl font-extralight text-primary-600/40 md:text-4xl">
              {content.nameSuffix}
            </span>
          </div>
          <button
            type="button"
            onClick={onClick}
            className="p-1 text-primary-600"
          >
            {marked ? (
              <BsFillBookmarkCheckFill size="20" />
            ) : (
              <BsBookmark size="20" />
            )}
          </button>
        </div>
        <p className="font-light text-zinc-500">{description}</p>
      </div>
      <Link href={`/${slug}`}>
        <button
          className="font-tajawal w-full rounded-b-lg border-t py-2 duration-500 flex-row-center hover:bg-zinc-700 hover:text-zinc-100 active:scale-95"
          type="button"
        >
          {content.read}
        </button>
      </Link>
    </div>
  );
}