"use client";
import { useFilter } from "@/hooks/use-filter";
import { DynamicFilterInput } from "@/components/filter-input";
import type { NamePage } from "@/types/name-project";
import dynamic from "next/dynamic";
import { TabsContent } from "@/components/ui/tabs";

const CardSkeleton = () => (
  <div className="rounded bg-zinc-50 px-4 py-5 shadow-lg">
    <div className="gap-3 flex-row-between ">
      <div className="h-5 w-16 animate-pulse rounded-full bg-zinc-200 duration-1000" />
      <div className="h-8 w-8 animate-pulse rounded-xl bg-zinc-200 duration-1000" />
    </div>
    <div className="space-y-2 pb-2 pl-3 pt-4">
      <div className="h-3 w-full animate-pulse rounded-full bg-zinc-200 duration-1000" />
      <div className="h-3 w-11/12 animate-pulse rounded-full bg-zinc-200 duration-1000" />
      <div className="h-3 w-10/12 animate-pulse rounded-full bg-zinc-200 duration-1000" />
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
//======================================
export const TabContentFullList = ({
  names,
}: {
  names: Omit<NamePage, "content">[];
}) => {
  const { filtered, input, setInput } = useFilter({
    list: names,
    filterFn: (item, input) => item.key.includes(input),
  });
  return (
    <TabsContent value="all" className="pt-5">
      <DynamicFilterInput input={input} setInput={setInput} />
      <div className="sm:masonry-cols-2 md:masonry-cols-3 w-full space-y-5 pb-12 pt-4">
        {filtered
          // ?.slice(0, 10)
          .map((o) => (
            <DynamicNameCard
              key={o.slug}
              _id={o._id}
              title={o.title}
              slug={o.slug}
              description={o.description}
            />
          ))}
      </div>
    </TabsContent>
  );
};
