import { H1 } from "@/components/headers";
import { getRuiners } from "@sanity/lib/get-ruiners";
import Link from "next/link";
import clsx from "clsx";

const content = {
  title: "المهلكات",
  description:
    "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ ۗ وَإِذَا أَرَادَ اللَّهُ بِقَوْمٍ سُوءًا فَلَا مَرَدَّ لَهُ ۚ وَمَا لَهُم مِّن دُونِهِ مِن وَالٍ ",
};

export const metadata = {
  title: "المهلكات",
};

export const revalidate = 1800; // 5 hour
export const runtime = "edge";

export default async function RuinersPage() {
  const list = await getRuiners();
  return (
    <div className="page-container">
      <div className="mx-auto">
        <H1 value={content.title} />
        <h3 className="mx-auto max-w-2xl text-center text-2xl">
          {content.description}
        </h3>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-6 pt-8 text-zinc-500 md:grid-cols-2">
          {list
            .sort((a, b) => a.order - b.order)
            .map((o, i) => (
              <Link
                href={`/ruiners/${o.slug}`}
                key={i}
                className="group rounded border-b-2 border-zinc-100 bg-gradient-to-t from-zinc-100 to-zinc-50 px-3 py-4 shadow-lg  duration-300 hover:border-primary-400"
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
                  <span className="font-tajawal font-semibold">{o.title}</span>
                </div>
                <p className="font-light ">{o.description}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
