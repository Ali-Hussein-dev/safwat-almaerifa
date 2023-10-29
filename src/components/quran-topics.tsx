"use client";
import { useFilter } from "@/hooks/use-filter";
import { type QuranTopic } from "../../sanity/lib/get-quran-topics";
import * as React from "react";
import { FilterInput } from "./filter-input";
import { TopicCard } from "./topic-card/topic-card";

type ListItem = Pick<QuranTopic, "title" | "order">;

export const QuranTopics = ({ list }: { list: ListItem[] }) => {
  const { filtered, input, setInput } = useFilter<ListItem>({
    list,
    filterFn: (item, input) => item.title.includes(input),
  });
  return (
    <div className="px-2">
      <FilterInput input={input} setInput={setInput} />
      <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((topic, i) => (
          <TopicCard key={i} order={topic.order} title={topic.title} />
        ))}
      </div>
    </div>
  );
};
