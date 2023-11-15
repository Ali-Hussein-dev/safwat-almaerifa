"use client";
import clsx from "clsx";
import * as React from "react";

//======================================
export const TrancatedText = ({ text }: { text: string }) => {
  const [isTrancated, setIsTrancated] = React.useState(true);
  return (
    <p
      className={clsx(
        "cursor-pointer leading-6 duration-300",
        isTrancated ? "line-clamp-2 overflow-hidden text-ellipsis" : "",
      )}
      onClick={() => setIsTrancated(!isTrancated)}
    >
      {text}
    </p>
  );
};
