"use client";
import { Resizable } from "re-resizable";
import * as React from "react";

export default function NamePage({ children }: { children: React.ReactNode }) {

  return (
    <Resizable
      minWidth="350px"
      className="mx-auto w-full grow rounded-sm bg-zinc-100 px-3 pb-8 pt-12 shadow-xl md:px-8 flex-col-center max-w-3xl"
    >
      {children}
    </Resizable>
  );
}
