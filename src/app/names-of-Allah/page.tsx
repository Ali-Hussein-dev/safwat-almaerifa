import { AllahNamesTabs } from "@/components/God-Names/Allah-names-tabs";
import { H1 } from "@/components/headers";
import { ScrollTo } from "@/components/scroll-to";

const content = {
  h1: "أسماء الله الحسنى",
  p: "الإحسان أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك",
};
export const metadata = {
  title: content.h1,
  description: content.p,
  category: "أسماء الله الحسنى",
};

const NamesOfAllah = () => {
  return (
    <div className="mx-auto w-full max-w-3xl grow space-y-6 px-2 pt-4 md:pt-20">
      <div>
        <H1 value={content.h1} />
        <p className="text-center text-lg text-zinc-600">{content.p}</p>
      </div>
      <AllahNamesTabs />
      <ScrollTo />
    </div>
  );
};

export default NamesOfAllah;
