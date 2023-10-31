import React from "react";

export const ActionIcon = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className="center group h-10 w-10 rounded-xl duration-200 hover:bg-zinc-900 hover:text-zinc-100 active:translate-y-1 disabled:cursor-not-allowed"
    {...rest}
  >
    {children}
  </button>
);
