"use client";
import clsx from "clsx";
import * as React from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { BackButton } from "../back-button";
import { ActionIcon } from "../action-icon";
import { useReadingPreferences } from "@/hooks/use-reading-preferences";
import { ScrollTo } from "../scroll-to";

const classes = {
  dark: "bg-zinc-800 text-zinc-300",
  light: "bg-zinc-100 text-zinc-700 text-zinc-700",
  textSize: [
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl font-light leading-lose",
  ],
};

export const ReadingPage = ({
  body,
  bottom,
  top,
  grow,
}: {
  body: React.ReactNode;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  grow?: boolean;
}) => {
  const { theme, fontSize, incFontSize, decFontSize, setTheme } =
    useReadingPreferences();
  return (
    <>
      <div
        className={clsx(
          "flex flex-col gap-1",
          "shadow-side mx-auto h-full w-full max-w-[755px] grow px-3 pb-6 shadow-xl duration-150 sm:rounded md:px-8",
          classes[theme],
        )}
      >
        <div className="w-full py-2 flex-row-between">
          <div className="gap-2 flex-row-start">
            <ActionIcon onClick={() => setTheme()}>
              {theme === "light" ? <CiDark size="22" /> : <CiLight size="22" />}
            </ActionIcon>
            <ActionIcon
              disabled={fontSize === classes.textSize.length - 1}
              onClick={() => incFontSize()}
            >
              +A
            </ActionIcon>
            <ActionIcon disabled={fontSize === 0} onClick={() => decFontSize()}>
              -A
            </ActionIcon>
          </div>
          <BackButton />
        </div>
        {top}
        <div
          className={clsx(
            "prose prose-zinc max-w-full prose-p:leading-10",
            theme === "dark" && "prose-invert",
            classes.textSize[fontSize],
            grow && "grow",
          )}
        >
          {body}
        </div>
        {bottom}
      </div>
      <ScrollTo />
    </>
  );
};
