import { H1 } from "@/components/headers";
import { getStraightPathTitles } from "@sanity/lib/get-straight-path";
import { CardList } from "@/components/straight-path/card-list";

const content = {
  h1: "الصراط المستقيم",
  discrption:
    "صِرَاطِ اللَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ أَلَا إِلَى اللَّهِ تَصِيرُ الْأُمُورُ",
};
export const metadata = {
  title: content.h1,
  description: content.discrption,
};
export default async function StraightPathPage() {
  const res = await getStraightPathTitles();
  return (
    <div className="page-container relative">
      <div className="mb-5">
        <H1 value={content.h1} />
        <p className="text-center text-lg">{content.discrption}</p>
      </div>
      <CardList items={res} />
    </div>
  );
}
