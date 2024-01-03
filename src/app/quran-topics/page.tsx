import { getQuranTopicsTitles } from "@sanity/lib/get-quran-topics";
import * as React from "react";
import { QuranTopics } from "@/components/quran-topics";
import { H1 } from "@/components/headers";
import type { Metadata } from "next";
import { ScrollTo } from "@/components/scroll-to";

const content = {
  h1: "مواضيع السور",
  description: "شرح مختصر لمواضيع السور التي تساعد على الفهم والتدبر",
  loading: "جاري التحميل...",
};

export const metadata: Metadata = {
  title: content.h1,
  description: content.description,
  category: "القرآن الكريم",
};
export const revalidate = 1000;
const QuranTopicsPage = async () => {
  const res = await getQuranTopicsTitles();
  return (
    <div className="page-container">
      <div className="mb-8">
        <H1 value={content.h1} />
        <h3 className="mt-2 text-center text-lg">{content.description}</h3>
      </div>
      <React.Suspense
        fallback={<p className="text-center text-xl">{content.loading}</p>}
      >
        <QuranTopics list={res} />
      </React.Suspense>

      <ScrollTo />
    </div>
  );
};

export default QuranTopicsPage;
