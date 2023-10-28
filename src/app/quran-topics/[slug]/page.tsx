import { PortableText } from "@portabletext/react";
import { getQuranTopicContent } from "../../../../sanity/lib/get-quran-topics";
import { BackButton } from "@/components/back-button";
import * as React from "react";

const content = {
  loading: "جاري التحميل ...",
};
const TopicPage = async ({ params }: { params: { slug: number } }) => {
  const res = await getQuranTopicContent(+params.slug);
  const page = res[0]!;

  return (
    <div className="mx-auto h-full w-full max-w-3xl grow bg-zinc-100 px-4 pb-6 pt-4 text-zinc-700 shadow-lg md:pt-12">
      <React.Suspense
        fallback={<div className="text-center text-xl">{content.loading}</div>}
      >
        <div className="w-full">
          <div className="mb-4 border-b border-zinc-300 pb-1 flex-row-between">
            <h1 className="text-2xl font-semibold text-lime-600">
              {page.title}
            </h1>
            <BackButton />
          </div>
          <div className="prose mb-4 max-w-3xl prose-p:text-lg ">
            <PortableText value={page.content} />
          </div>
          <div className="mb-4 h-[1px] bg-zinc-400" />
          <iframe
            src={`https://quran.com/${page.order}`}
            className="h-80 w-full rounded-sm"
          />
        </div>
      </React.Suspense>
    </div>
  );
};

export default TopicPage;
