import { H1 } from "@/components/headers";
import { getRuiners } from "../../../sanity/lib/get-ruiners";
import Link from "next/link";
import clsx from "clsx";

const content = {
  title: "المهلكات",
  description: "أَعْدَى عَدُوِّكَ نفسُكَ التى بين جَنْبَيْكَ",
};

export default async function RuinersPage() {
  const list = await getRuiners();
  return (
    <div className="grow bg-gray-50 pb-6 pt-8 md:pt-20">
      <div className="mx-auto ">
        <H1 value={content.title} />
        <p className="text-center">{content.description}</p>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-1 gap-6 pt-8 text-zinc-500 md:grid-cols-2">
          {list
            .sort((a, b) => +a.slug - +b.slug)
            .map((o, i) => (
              <Link
                href={`/ruiners/${o.slug}`}
                key={i}
                className="group rounded border-b-2 border-transparent bg-gradient-to-t from-zinc-100 to-transparent px-3 py-4 shadow-lg  duration-300 hover:border-lime-400"
              >
                <div className="mb-3 gap-2 flex-row-start ">
                  <span
                    className={clsx(
                      "center h-7 w-7 rounded-full border border-lime-400 font-semibold text-lime-500 duration-300",
                      "group-hover:bg-lime-500 group-hover:text-white",
                    )}
                  >
                    {o.slug}
                  </span>
                  <span className="font-semibold">{o.title}</span>
                </div>
                <p className="font-light ">{o.description}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
