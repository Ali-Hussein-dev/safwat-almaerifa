import { getQuranTopicsTitles } from "../../../sanity/lib/get-quran-topics";
import * as React from "react";
import { QuranTopics } from "@/components/quran-topics";
import { H1 } from "@/components/headers";
import type { Metadata } from "next";
const content = {
  h1: "مواضيع سور القرآن الكريم",
  description: "شرح مختصر لمواضيع السور التي تساعد على الفهم والتدبر",
  loading: "جاري التحميل...",
};

export const metadata: Metadata = {
  title: content.h1,
  description: content.description,
  category: "قرآن",
};
export const revalidate = 1000;
const QuranTopicsPage = async () => {
  const res = await getQuranTopicsTitles();
  return (
    <div className="grow">
      <div className="mx-auto max-w-3xl pb-8 pt-4 text-zinc-700 md:pt-20">
        <div className="mb-8 ">
          <H1 value={content.h1} />
          <p className="text-center">{content.description}</p>
        </div>
        <React.Suspense
          fallback={<p className="text-center text-xl">{content.loading}</p>}
        >
          <QuranTopics list={res} />
        </React.Suspense>
      </div>
    </div>
  );
};

export default QuranTopicsPage;

