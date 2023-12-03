import { H1 } from "@/components/headers";
import { getStraightPathTitles } from "../../../sanity/lib/get-straight-path";
import { CardList } from "@/components/straight-path/card-list";

const content = {
  h1: "الصراط المستقيم",
  discrption: "خير الإمور أوساطها",
  // headers: [
  //   { label: "الإفراط" },
  //   { label: "الوسطية والعدل " },
  //   {
  //     label: "التفريط",
  //   },
  // ],
};

export default async function StraightPathPage() {
  const res = await getStraightPathTitles();
  return (
    <div className="relative mx-auto w-full max-w-4xl grow space-y-5 px-2 pt-4 text-zinc-700 md:p-20">
      <div className="mb-3">
        <H1 value={content.h1} />
        <p className="text-center text-lg">{content.discrption}</p>
      </div>
      <CardList items={res} />
    </div>
  );
}
