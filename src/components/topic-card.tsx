import Link from "next/link";

interface TopicProps {
  order: number;
  title: string;
}

export const TopicCard: React.FC<TopicProps> = ({ order, title }) => {
  return (
    <Link
      href={`/quran-topics/${order}`}
      className=" group rounded border-b-2 border-transparent bg-gradient-to-t from-zinc-100 to-transparent px-4 py-6 shadow-lg duration-300 hover:border-zinc-500"
    >
      <div className="gap-6 flex-row-start">
        <span className="center shape-octagon h-8 w-8 border-dashed border-lime-500 bg-white font-semibold duration-500 group-hover:border-zinc-600 group-hover:bg-lime-400 group-hover:text-zinc-100">
          <span>{order}</span>
        </span>
        <span className="text-xl font-bold text-zinc-500">{title}</span>
      </div>
    </Link>
  );
};
