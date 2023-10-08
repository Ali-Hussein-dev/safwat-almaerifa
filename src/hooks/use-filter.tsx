"use client";
import { type NamePage } from "@/types/name-project";
import * as React from "react";

export const useFilter = ({
  list = [],
}: {
  list: Omit<NamePage, "content">[];
}) => {
  const [input, setInput] = React.useState("");
  const [filtered, setFiltered] = React.useState(list);
  React.useEffect(() => {
    if (Array.isArray(list)) {
      const trimedInput = input.trim();
      const filterByInput = (item: Omit<NamePage, "content">) =>
        item.key.includes(trimedInput);
      const filteredList = list.filter(filterByInput);
      console.log("filtering...", input);
      setFiltered(filteredList);
    }
  }, [input, list]);

  return { filtered, input, setInput };
};
