"use client";
import { useFilter } from "@/hooks/use-filter-2";
import { type NamePage } from "@/types/name-project";
import dynamic from "next/dynamic";

const DynamicInput = dynamic(
  () => import("./filter-input").then((r) => r.FilterInput),
  {
    ssr: false,
    loading: () => (
      <div className="mb-2 h-12 w-full animate-pulse rounded bg-zinc-100 duration-300" />
    ),
  },
);

const CardSkeleton = () => (
  <div className="break-inside w-full space-y-5 rounded bg-zinc-50 p-7 shadow">
    <div className="space-y-2">
      <div className="h-4 w-10 animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-full animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-full animate-pulse rounded bg-zinc-200 duration-300" />
      <div className="h-4 w-36 animate-pulse rounded bg-zinc-200 duration-300" />
    </div>
    <div className="flex-row-between w-full">
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
      <DynamicInput input={input} setInput={setInput} />
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
