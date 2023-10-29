import { getQuranTopicsTitles } from "../../../sanity/lib/get-quran-topics";
import * as React from "react";
import { QuranTopics } from "@/components/quran-topics";

const content = {
  h1: "مواضيع سور القرآن الكريم",
  description: "شرح مختصر لمواضيع السور التي تساعد على الفهم والتدبر",
  loading: "جاري التحميل...",
};

const QuranTopicsPage = async () => {
  const res = await getQuranTopicsTitles();
  return (
    <div className="grow">
      <div className="mx-auto max-w-3xl pt-4 text-zinc-700 md:pt-12">
        <div className="mb-8 ">
          <h1 className="mb-1 text-center text-2xl font-bold text-lime-600">
            {content.h1}
          </h1>
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

