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
    <div className="flex h-full w-full grow flex-col items-center justify-start space-y-4 border-t border-zinc-300 pt-4">
      <button
        className="rounded-lg border border-zinc-300 bg-zinc-100 px-8 py-2 text-lg font-semibold text-zinc-700 duration-300 hover:bg-zinc-800 hover:text-zinc-100"
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
