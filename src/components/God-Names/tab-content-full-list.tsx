"use client";
import { useFilter } from "@/hooks/use-filter";
import { DynamicFilterInput } from "@/components/filter-input";
import type { NamePage } from "@/types/name-project";
import dynamic from "next/dynamic";
import { TabsContent } from "@/components/ui/tabs";

const CardSkeleton = () => (
  <div className="break-inside w-full space-y-5 rounded bg-zinc-50 p-7 shadow">
    <div className="space-y-2 duration-1000">
      <div className="h-4 w-10 animate-pulse rounded bg-zinc-200 duration-1000" />
      <div className="h-4 w-full animate-pulse rounded bg-zinc-200 duration-1000" />
      <div className="h-4 w-full animate-pulse rounded bg-zinc-200 duration-1000" />
      <div className="h-4 w-36 animate-pulse rounded bg-zinc-200 duration-1000" />
    </div>
    <div className="w-full flex-row-between">
      <div className="h-4 w-10 animate-pulse rounded bg-zinc-200 duration-1000" />
      <div className="h-4 w-4 animate-pulse rounded-xl bg-zinc-200 duration-1000" />
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
        {filtered?.map((o) => (
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
