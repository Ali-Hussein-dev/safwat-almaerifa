"use client";
import clsx from "clsx";
import * as React from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { BackButton } from "../back-button";
import { ActionIcon } from "../action-icon";

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
const usePreferences = () => {
  const [theme, setTheme] = React.useState<"dark" | "light">("light");
  const [textSize, setTextSize] = React.useState<number>(0);
  const inc = () => setTextSize((prv) => prv + 1);
  const dec = () => setTextSize((prv) => prv - 1);
  return { theme, textSize, inc, dec, setTheme };
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
  const { theme, textSize, inc, dec, setTheme } = usePreferences();
  return (
    <div
      className={clsx(
        "flex flex-col gap-1",
        "shadow-side mx-auto h-full w-full max-w-[755px] grow rounded px-3 pb-6 shadow-xl duration-150 md:px-8",
        classes[theme],
      )}
    >
      <div className="w-full py-2 flex-row-between">
        <div className="gap-2 flex-row-start">
          <ActionIcon
            onClick={() =>
              setTheme((prv) => (prv === "dark" ? "light" : "dark"))
            }
          >
            {theme === "light" ? <CiDark size="22" /> : <CiLight size="22" />}
          </ActionIcon>
          <ActionIcon
            disabled={textSize === classes.textSize.length - 1}
            onClick={() => inc()}
          >
            +A
          </ActionIcon>
          <ActionIcon disabled={textSize === 0} onClick={() => dec()}>
            -A
          </ActionIcon>
        </div>
        <BackButton />
      </div>
      {top}
      <div
        className={clsx(
          "prose prose-zinc max-w-full",
          theme === "dark" && "prose-invert",
          classes.textSize[textSize],
          grow && "grow",
        )}
      >
        {body}
      </div>
      {bottom}
    </div>
  );
};
