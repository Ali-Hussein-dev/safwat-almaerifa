import { NamesList } from "@/components/names-list";
import { getAllPages } from "../../../sanity/lib/get-name-page";
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

const NamesOfAllah = async () => {
  const pages = (await getAllPages()).sort((a, b) => +a.slug - +b.slug);

  return (
    <div className="mx-auto w-full max-w-3xl grow space-y-4 px-2 pt-4 md:pt-20">
      <div>
        <H1 value={content.h1} />
        <p className="text-center text-lg text-zinc-600">{content.p}</p>
      </div>
      <NamesList names={pages} />
    </div>
  );
};

export default NamesOfAllah;
