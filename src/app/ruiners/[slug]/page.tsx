import { ReadingPage } from "@/components/reading-container/reading-page";
import { getRuinerPage } from "@sanity/lib/get-ruiners";
import * as React from "react";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { getPageTitle } from "@sanity/lib/seo";
import { format } from "date-fns";
export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const res = await getPageTitle("ruiners", params.slug);
  const title = res?.title ?? "no title";
  return {
    title,
  };
}

const content = {
  loading: "جاري تحميل المحتوى...",
  lastUpdate: "آخر تعديل: ",
  sources: "المصادر",
};

//======================================
const RuinerPage = async ({ params }: { params: { slug: string } }) => {
  const page = await getRuinerPage(params.slug);
  return (
    <ReadingPage
      grow
      top={
        <div className="mb-4 w-full border-b border-zinc-200 pb-2 flex-row-between">
          <h2 className="text-3xl font-bold">{page?.title}</h2>
        </div>
      }
      body={
        <React.Suspense
          fallback={<p className="w-full text-center">{content.loading}</p>}
        >
          <PortableText value={page?.content} />
        </React.Suspense>
      }
      bottom={
        <div className="flex flex-col !items-start justify-between border-t pt-2 md:flex-row">
          {page?.sources && (
            <ul className="mb-2 pr-0 md:mb-0">
              <span className="font-tajawal font-semibold">
                {content.sources}
              </span>
              {page?.sources.map((source, i) => (
                <li key={i} className="flex flex-col">
                  <span className="">{source.title}</span>
                  {/* <span className="">{source.url}</span> */}
                </li>
              ))}
            </ul>
          )}
          <div className="italic">
            {content.lastUpdate}
            {format(new Date(page._updatedAt), "dd.MM.yyyy / hh:mm")}
          </div>
        </div>
      }
    />
  );
};

export default RuinerPage;
