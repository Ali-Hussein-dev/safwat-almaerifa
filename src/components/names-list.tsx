"use client";
import { useFilter } from "@/hooks/use-filter";
import { FilterInput } from "./filter-input";
import { NameCard } from "./name-card";
import { type NamePage } from "@/types/name-project";

export const NamesList = ({
  names,
}: {
  names: NamePage[];
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
            <NameCard
              key={o.slug}
              name={o.title}
              slug={o.slug}
              description={o.description}
            />
          ))}
        </section>
      </div>
    </>
  );
};
