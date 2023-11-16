"use client";
import { useMarked } from "@/hooks/use-mark";
import { type NamePage } from "@/types/name-project";
import Link from "next/link";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import * as React from "react";
const content = {
  read: "اقرأ المزيد",
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
    <div className="break-inside flex flex-col justify-between rounded-lg border-zinc-100 bg-gradient-to-t from-zinc-100 to-transparent p-4 pt-8 text-zinc-700 shadow-lg duration-300">
      <div className="mb-5 grow">
        <div className="mb-1 w-full font-bold flex-row-between">{title}</div>
        <p className="font-light text-zinc-500">{description}</p>
      </div>
      <div className="flex-row-between">
        <Link href={`/${slug}`} className="text-primary-500">
          {content.read}
        </Link>
        <button
          type="button"
          onClick={onClick}
          className="p-1 font-medium text-primary-500"
        >
          {marked ? (
            <BsFillBookmarkCheckFill size="20" />
          ) : (
            <BsBookmark size="20" />
          )}
        </button>
      </div>
    </div>
  );
}
