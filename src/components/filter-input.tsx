"use client";
import * as React from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from 'react-icons/io5'
const content = {
  placeholder: "ابحث",
};
type Props = {
  input: string;
  setInput: (input: string) => void;
};

export function FilterInput({ input, setInput }: Props) {
  const [value, setValue] = React.useState(input);
  const onChange = (v:string) => {
    setInput(v);
    setValue(v);
  }
  return (
      <div className="flex-row-start mb-4 w-full gap-1 border border-zinc-300 px-3 rounded-lg focus-within:shadow-xl duration-300">
    <FaSearch className="text-zinc-300" />
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={content.placeholder}
        className="h-12 w-full rounded-lg px-4 grow focus:outline-none"
      />
      {value && (
        <button type="button" onClick={() => onChange("")} className="bg-zinc-100 p-2 rounded-xl">
      <IoClose className="text-zinc-500" size="20" />
      </button>
      )}
    </div>
  );
}
<pre></pre>