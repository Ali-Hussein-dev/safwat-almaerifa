"use client";
import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  description: string;
};

const content = {
  read: "اقرأ المزيد",
};

export function NameCard({ name, description, slug }: Props) {
  return (
    <div className="break-inside flex flex-col justify-between rounded-sm border-zinc-500 bg-gradient-to-b from-zinc-100 to-transparent p-4 text-zinc-700 duration-300">
      <div className="mb-5 grow">
        <div className="mb-1 font-bold flex-row-between w-full">
          {name}
        </div>
        <p className="font-light text-zinc-500">{description}</p>
      </div>
      <Link href={`/${slug}`}>
        <button className="text-lime-500">{content.read}</button>
      </Link>
    </div>
  );
}
