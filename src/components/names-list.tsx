"use client";
import { useFilter } from "@/hooks/use-filter";
import { FilterInput } from "./filter-input";
import { type NamePage } from "@/types/name-project";
import dynamic from "next/dynamic";

const CardSkeleton = () => (
  <div className="break-inside w-full min-w-[10rem] space-y-5 rounded bg-zinc-50 p-7 shadow">
    <div className="space-y-2">
      <div className="h-4 w-10 animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-44 animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-44 animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-28 animate-pulse rounded bg-zinc-200 duration-300" />
    </div>
    <div className="w-full flex-row-between">
      <div className="h-4 w-10 animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-4 animate-pulse rounded-xl bg-zinc-200 duration-300" />
    </div>
  </div>
);
const DynamicNameCard = dynamic(
  () => import("./name-card").then((r) => r.NameCard),
  {
    ssr: false,
    loading: () => <CardSkeleton />,
  },
);

export const NamesList = ({
  names,
}: {
  names: Omit<NamePage, "content">[];
}) => {
  const { filtered, input, setInput } = useFilter({
    list: names,
  });

  return (
    <>
      <FilterInput input={input} setInput={setInput} />
      <div className="mx-auto">
        <section className="sm:masonry-cols-2 md:masonry-cols-3 space-y-5 pb-12">
          {filtered?.map((o) => (
            <DynamicNameCard
              key={o._id}
              title={o.title}
              slug={o.slug}
              description={o.description}
              _id={o._id}
            />
          ))}
        </section>
      </div>
    </>
  );
};
