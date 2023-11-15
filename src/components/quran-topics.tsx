"use client";
import { useFilter } from "@/hooks/use-filter";
import { type QuranTopic } from "../../sanity/lib/get-quran-topics";
import * as React from "react";
import { DynamicFilterInput } from "./filter-input";
import { DynamicQuranTopicCard } from "./topic-card/topic-card";

type ListItem = Pick<QuranTopic, "title" | "order" | "description">;

export const QuranTopics = ({ list }: { list: ListItem[] }) => {
  const { filtered, input, setInput } = useFilter<ListItem>({
    list,
    filterFn: (item, input) => item.title.includes(input),
  });
  return (
    <div className="px-2">
      <DynamicFilterInput input={input} setInput={setInput} />
      <div className="grid grid-cols-1 gap-5 pt-4 sm:grid-cols-2">
        {filtered.map((topic, i) => (
          <DynamicQuranTopicCard
            key={i}
            order={topic.order}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </div>
  );
};
