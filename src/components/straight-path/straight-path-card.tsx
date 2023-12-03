"use client";
import * as React from "react";

export const StraightPathCard = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return (
    <div className="w-full rounded border bg-gradient-to-t from-zinc-100/60 to-zinc-50/10">
      <button
        type="button"
        className="w-full bg-transparent py-3 pr-2 text-right text-xl font-extrabold text-sky-400 hover:text-sky-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="border-t p-2">{children}</div>}
    </div>
  );
};
