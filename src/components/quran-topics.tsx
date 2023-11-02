"use client";
import { useFilter } from "@/hooks/use-filter";
import { type QuranTopic } from "../../sanity/lib/get-quran-topics";
import * as React from "react";
import dynamic from "next/dynamic";

import { DynamicFilterInput } from "./filter-input";

const CardSkeleton = () => (
  <div className="rounded bg-zinc-50 px-4 py-5 shadow-lg">
    <div className="gap-3 flex-row-start">
      <div className="h-8 w-8 animate-pulse rounded-full bg-zinc-200 duration-300" />
      <div className="h-4 w-20 animate-pulse rounded bg-zinc-200 duration-300" />
    </div>
  </div>
);

type ListItem = Pick<QuranTopic, "title" | "order">;
const DynamicCard = dynamic(
  () => import("./topic-card/topic-card").then((c) => c.TopicCard),
  {
    ssr: false,
    loading: () => <CardSkeleton />,
  },
);
export const QuranTopics = ({ list }: { list: ListItem[] }) => {
  const { filtered, input, setInput } = useFilter<ListItem>({
    list,
    filterFn: (item, input) => item.title.includes(input),
  });
  return (
    <div className="px-2">
      <DynamicFilterInput input={input} setInput={setInput} />
      <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((topic, i) => (
          <DynamicCard key={i} order={topic.order} title={topic.title} />
        ))}
      </div>
    </div>
  );
};
