import { AllahNamesTabs } from "@/components/God-Names/Allah-names-tabs";
import { H1 } from "@/components/headers";

const content = {
  h1: "أسماء الله الحسنى",
  p: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا ۖ وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ ۚ سَيُجْزَوْنَ مَا كَانُوا يَعْمَلُونَ",
};
export const metadata = {
  title: content.h1,
  description: "أسمى الله الحسنى مع شرح لكل اسم",
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
    </div>
  );
};

export default NamesOfAllah;
