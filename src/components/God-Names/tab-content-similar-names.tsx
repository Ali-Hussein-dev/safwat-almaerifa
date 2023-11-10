import { PortableText } from "@portabletext/react";
import { getSimilarNames } from "../../../sanity/lib/get-name-page";
import * as React from "react";
import { TabsContent } from "@/components/ui/tabs";

//======================================
export const TabContentSimilarNames = async () => {
  const list = await getSimilarNames();
  return (
    <TabsContent value="similars" className="pt-5">
      <div className="w-full gap-8 bg-zinc-50 flex-col-center">
        {list.map((o, i) => (
          <div
            className="rounded-xl border-[0.5px] border-b-2 border-zinc-300 px-4 py-8 shadow-lg"
            key={i}
          >
            <div className="relative mb-4 gap-1 flex-row-center">
              <div className="absolute h-[1.5px] w-full bg-gradient-to-r from-transparent via-lime-300 to-transparent" />
              <h2 className="center z-[2] max-w-fit grow bg-zinc-50 px-4 font-bold text-lime-500">
                {o.title}
              </h2>
            </div>
            <article className="prose max-w-4xl prose-headings:text-zinc-400 prose-p:text-lg">
              <PortableText value={o.content} />
            </article>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};
