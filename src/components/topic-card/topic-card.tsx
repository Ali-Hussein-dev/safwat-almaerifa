import clsx from "clsx";
import Link from "next/link";
import css from "./topic-card.module.css";
import { TrancatedText } from "./TrancatedText";
import dynamic from "next/dynamic";

interface TopicProps {
  order: number;
  title: string;
  description: string;
}
const content = {
  read: "اقرأ المزيد",
};
export const TopicCard: React.FC<TopicProps> = ({
  order,
  title,
  description,
}) => {
  return (
    <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg border bg-gradient-to-t from-stone-100 to-zinc-50 pt-6 shadow-lg">
      <div className="flex grow justify-between px-3 pb-1">
        <div className="grow pb-2 pt-1">
          <span className="font-tajawal text-xl font-bold text-primary-600">
            {title}
          </span>
          <div className="pr-2 pt-1 text-zinc-400">
            <TrancatedText text={description} />
          </div>
        </div>
        <span
          className={clsx(
            "center h-8 w-8 min-w-[2rem] font-semibold duration-500",
            css["shape-octagon"],
          )}
        >
          <span>{order}</span>
        </span>
      </div>

      <Link href={`/quran-topics/${order}`}>
        <button
          className="font-tajawal w-full rounded-b-lg border-t py-2 duration-500 flex-row-center hover:bg-zinc-700 hover:text-zinc-100 active:scale-95"
          type="button"
        >
          <span className="mx-2">{content.read}</span>
        </button>
      </Link>
    </div>
  );
};

const CardSkeleton = () => (
  <div className="rounded bg-zinc-50 px-4 py-5 shadow-lg">
    <div className="gap-3 flex-row-between">
      <div className="h-4 w-20 animate-pulse rounded-full bg-zinc-200 duration-1000" />
      <div className="h-8 w-8 animate-pulse rounded-full bg-zinc-200 duration-1000" />
    </div>
    <div className="space-y-2 py-2 pl-3">
      <div className="h-3 w-full animate-pulse rounded-full bg-zinc-200 duration-1000" />
      <div className="h-3 w-11/12 animate-pulse rounded-full bg-zinc-200 duration-1000" />
    </div>
  </div>
);

export const DynamicQuranTopicCard = dynamic(
  () => import("./topic-card").then((c) => c.TopicCard),
  {
    ssr: false,
    loading: () => <CardSkeleton />,
  },
);