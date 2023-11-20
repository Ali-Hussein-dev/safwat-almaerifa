"use client";
import * as React from "react";

const content = {
  open: " اخفاء السورة",
  close: "عرض السورة",
};
export const QuranIframe = ({
   suraNumber,
}: {
  suraNumber: number;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-start space-y-4 pt-4">
      <button
        className="rounded-lg border border-inherit bg-transparent px-8 py-2 text-lg font-normal text-inherit duration-500 hover:font-semibold"
        onClick={() => setOpen(!open)}
      >
        {open ? content.open : content.close}
      </button>
      {open && (
        <iframe
          src={`https://quran.com/${suraNumber}`}
          className="min-h-[500px] w-full grow overflow-hidden"
        />
      )}
    </div>
  );
};
