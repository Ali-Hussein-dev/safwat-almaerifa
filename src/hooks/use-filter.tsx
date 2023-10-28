import * as React from "react";

export interface UseFilterOptions<T = object> {
  list: T[];
  filterFn: (item: T, input: string) => boolean;
}

export const useFilter = <T,>({
  list = [],
  filterFn: filterFn,
}: UseFilterOptions<T>) => {
  const [input, setInput] = React.useState("");
  const [filtered, setFiltered] = React.useState(list);

  React.useEffect(() => {
    if (Array.isArray(list)) {
      const trimmedInput = input.trim();
      const filteredList = list.filter((item) => filterFn(item, trimmedInput));
      setFiltered(filteredList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, list]);

  return { filtered, input, setInput };
};
