import { H1 } from "@/components/headers";
import { getRuiners } from "../../../sanity/lib/get-ruiners";
import Link from "next/link";
import clsx from "clsx";

const content = {
  title: "المهلكات",
  description: "أَعْدَى عَدُوِّكَ نفسُكَ التى بين جَنْبَيْكَ",
};

export const metadata = {
  title: "المهلكات",
};

export const revalidate = 1800; // 5 hour
export const runtime = "edge";

export default async function RuinersPage() {
  const list = await getRuiners();
  console.log("🚀 ~ file: page.tsx:20 ~ RuinersPage ~ list:", list);
  return (
    <div className="grow bg-gray-50 px-2 pb-6 pt-8 md:pt-20">
      <div className="mx-auto ">
        <H1 value={content.title} />
        <h3 className="text-center">{content.description}</h3>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-1 gap-6 pt-8 text-zinc-500 md:grid-cols-2">
          {list
            .sort((a, b) => a.order - b.order)
            .map((o, i) => (
              <Link
                href={`/ruiners/${o.slug}`}
                key={i}
                className="group rounded border-b-2 border-zinc-100 bg-gradient-to-t from-zinc-100 to-transparent px-3 py-4 shadow-lg  duration-300 hover:border-primary-400"
              >
                <div className="mb-3 gap-2 flex-row-start ">
                  <span
                    className={clsx(
                      "center h-7 w-7 rounded-full border border-primary-400 font-semibold text-primary-500 duration-300",
                      "group-hover:bg-primary-500 group-hover:text-white",
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="font-tajawal font-semibold">
                    {o.title} {o.order}
                  </span>
                </div>
                <p className="font-light ">{o.description}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
