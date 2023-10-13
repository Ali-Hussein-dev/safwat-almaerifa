"use client";
import { Resizable } from "re-resizable";
import * as React from "react";

export default function NamePage({ children }: { children: React.ReactNode }) {

  return (
    <Resizable
      minWidth="350px"
      className="mx-auto w-full max-w-2xl grow rounded-sm bg-zinc-100 px-3 pb-8 pt-12 shadow-xl flex-col-center md:px-8"
    >
      {children}
    </Resizable>
  );
}
