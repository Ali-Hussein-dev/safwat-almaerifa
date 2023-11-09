import Link from "next/link";

const content = {
  references: "المراجع المعتمدة",
  madeBy: " تصميم وتطوير ",
  creator: "ع.ح",
};
export const Footer = () => {
  return (
    <div
      className="isolate mx-auto h-14 w-full border-t border-zinc-300 bg-gradient-to-t from-zinc-950 to-zinc-700 px-2 py-2 text-zinc-100 flex-row-center"
      dir="ltr"
    >
      <div className="w-full max-w-3xl gap-3 flex-row-center">
        <div>
          <span>{content.madeBy}</span>
          <a href="https://ali-hussein.com" className="mr-1 underline">
            {content.creator}
          </a>
        </div>
        <Link href="/references" className="">
          {content.references}
        </Link>
      </div>
    </div>
  );
};
