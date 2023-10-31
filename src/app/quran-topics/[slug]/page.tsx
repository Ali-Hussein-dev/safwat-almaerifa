import { PortableText } from "@portabletext/react";
import { getQuranTopicContent } from "../../../../sanity/lib/get-quran-topics";
import * as React from "react";
import { QuranIframe } from "@/components/quran-iframe";
import { ReadingPage } from "@/components/reading-container/reading-page";

const content = {
  loading: "جاري التحميل ...",
};
const TopicPage = async ({ params }: { params: { slug: number } }) => {
  const res = await getQuranTopicContent(+params.slug);
  const page = res[0]!;

  return (
    <ReadingPage
      top={
        <div className="mb-4 border-b border-zinc-300 pb-1 flex-row-between">
          <h1 className="text-2xl font-semibold">{page.title}</h1>
        </div>
      }
      body={
        <React.Suspense
          fallback={
            <div className="text-center text-xl">{content.loading}</div>
          }
        >
          <div className="mb-4">
            <PortableText value={page.content} />
          </div>
        </React.Suspense>
      }
      bottom={<QuranIframe suraNumber={page.order} />}
    />
  );
};

export default TopicPage;
