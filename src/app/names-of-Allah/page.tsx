import { NamesList } from "@/components/names-list";
import { getAllPages } from "../../../sanity/lib/get-name-page";

const content = {
  h1: "أسماء الله الحسنى",
  p: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا ۖ وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ ۚ سَيُجْزَوْنَ مَا كَانُوا يَعْمَلُونَ",
};
export const metadata = {
  title: "أسماء الله الحسنى",
  description: "أسمى الله الحسنى مع شرح لكل اسم",
};

const NamesOfAllah = async () => {
  const pages = (await getAllPages()).sort((a, b) => +a.slug - +b.slug);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4 pt-4 md:pt-20">
      <div>
        <h1 className="mb-1 text-center text-lg font-extrabold text-zinc-700 sm:text-2xl md:text-4xl">
          {content.h1}
        </h1>
        <p className="text-center text-lg text-zinc-600">{content.p}</p>
      </div>
      <NamesList names={pages} />
    </div>
  );
};

export default NamesOfAllah;
