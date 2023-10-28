"use client";
import { useHotkeys } from "@mantine/hooks";
import * as React from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
let navigator: Navigator;

const content = {
  placeholder: "ابحث",
};
type Props = {
  input: string;
  setInput: (input: string) => void;
};

export function FilterInput({ input, setInput }: Props) {
  const [value, setValue] = React.useState(input);
  const onChange = (v: string) => {
    setInput(v);
    setValue(v);
  };
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const setFocus = () => {
    inputRef.current?.focus();
  };
  useHotkeys([["mod+K", () => setFocus()]]);
  return (
    <div className="mb-2 w-full gap-1 rounded border border-zinc-200 bg-gradient-to-t from-zinc-50 to-transparent px-3 duration-300 flex-row-start focus-within:border-zinc-300 focus-within:shadow-xl">
      <FaSearch className="text-zinc-300" />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={content.placeholder}
        className="h-12 w-full grow rounded-lg bg-transparent px-4 focus:outline-none"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          className="rounded-xl bg-zinc-100 p-2"
        >
          <IoClose className="text-zinc-500" size="20" />
        </button>
      ) : (
        <span className="hidden text-zinc-500 md:inline-block">
          {navigator && navigator.userAgent.includes("Mac")
            ? "cmd+K"
            : "ctrl+K"}
        </span>
      )}
    </div>
  );
}
