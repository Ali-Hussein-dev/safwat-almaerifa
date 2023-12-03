import { PortableText } from "@portabletext/react";
import { StraightPathCard } from "./straight-path-card";
import { type StraightPath } from "../../../sanity/lib/get-straight-path";
const content = {
  headers: [
    { label: "الإفراط" },
    { label: "الوسطية والعدل " },
    {
      label: "التفريط",
    },
  ],
};
export const revalidate = 1000;

export const CardList = ({ items }: { items: StraightPath[] }) => {
  return (
    <div className="font-tajawal prose prose-zinc max-w-full space-y-4">
      {items?.map((item, i) => (
        <StraightPathCard title={item.mainTitle} key={i} defaultOpen={false}>
          <div className="grid grid-cols-1 gap-2 p-2">
            <div className="">
              <h3 className="mb-1 mt-0 font-semibold text-zinc-500">
                {content.headers[0]?.label}
              </h3>
              <PortableText value={item.leftContent} />
            </div>
            <div className="">
              <h3 className="mb-2 mt-0 font-semibold  text-zinc-500">
                {content.headers[1]?.label}
              </h3>
              <PortableText value={item.middleContent} />
            </div>
            <div className="">
              <h3 className="mb-2 mt-0 font-semibold  text-zinc-500">
                {content.headers[2]?.label}
              </h3>
              <PortableText value={item.rightContent} />
            </div>
          </div>
        </StraightPathCard>
      ))}
    </div>
  );
};
