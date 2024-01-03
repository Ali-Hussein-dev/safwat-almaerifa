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
    <div className="page-container">
      <div className="mb-5">
        <H1 value={content.h1} />
        <h3 className="text-center">{content.p}</h3>
      </div>
      <AllahNamesTabs />
      <ScrollTo />
    </div>
  );
};

export default NamesOfAllah;
