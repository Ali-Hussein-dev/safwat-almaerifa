import clsx from "clsx";
import Link from "next/link";
import css from "./topic-card.module.css";
interface TopicProps {
  order: number;
  title: string;
}

export const TopicCard: React.FC<TopicProps> = ({ order, title }) => {
  return (
    <Link
      href={`/quran-topics/${order}`}
      className={clsx(
        "rounded border-b-2 border-transparent bg-gradient-to-t px-4 py-6 shadow-lg duration-300 hover:border-zinc-500",
        css.group,
      )}
    >
      <div className="gap-6 flex-row-start">
        <span
          className={clsx(
            "center h-8 w-8 font-semibold duration-500",
            css["shape-octagon"],
          )}
        >
          <span>{order}</span>
        </span>
        <span className="text-xl font-bold text-zinc-500">{title}</span>
      </div>
    </Link>
  );
};
