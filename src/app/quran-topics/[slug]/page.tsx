import { PortableText } from "@portabletext/react";
import { getQuranTopicContent } from "@sanity/lib/get-quran-topics";
import * as React from "react";
import { QuranIframe } from "@/components/quran-iframe";
import { ReadingPage } from "@/components/reading-container/reading-page";
import { format } from "date-fns";

const content = {
  loading: "جاري التحميل ...",
  lastUpdate: "آخر تعديل: ",
};
const TopicPage = async ({ params }: { params: { slug: number } }) => {
  const page = await getQuranTopicContent(+params.slug);

  return (
    <ReadingPage
      grow
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
            <QuranIframe suraNumber={page.order} />
          </div>
        </React.Suspense>
      }
      bottom={
        <div className="border-t pt-1">
          <span className="italic">
            {content.lastUpdate}
            {format(new Date(page._updatedAt), "dd.MM.yyyy / hh:mm")}
          </span>
        </div>
      }
    />
  );
};

export default TopicPage;
