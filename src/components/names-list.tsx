"use client";
import { useFilter } from "@/hooks/use-filter";
import { type NamePage } from "@/types/name-project";
import dynamic from "next/dynamic";
import { DynamicFilterInput } from "./filter-input";

const CardSkeleton = () => (
  <div className="break-inside w-full space-y-5 rounded bg-zinc-50 p-7 shadow">
    <div className="space-y-2">
      <div className="h-4 w-10 animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-full animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-full animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-36 animate-pulse rounded bg-zinc-200 duration-300" />
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
    filterFn: (item, input) => item.key.includes(input),
  });

  return (
    <div className="grow">
      <DynamicFilterInput input={input} setInput={setInput} />
      <div className="mx-auto w-full">
        <section className="sm:masonry-cols-2 md:masonry-cols-3 w-full space-y-5 pb-12">
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
    </div>
  );
};
