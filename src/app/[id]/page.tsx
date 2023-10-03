import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { getNamePage } from "../../../sanity/lib/get-name-page";
import { PortableText } from "@portabletext/react";
import { type NamePage } from "@/types/name-project";

const content = {
  source: "المرجع",
};
export default async function NamePage({ params }: { params: { id: string } }) {
  const pageRes = await getNamePage(params.id);
  const page = pageRes[0]!;
  return (
    <section className="mx-auto w-full max-w-3xl grow rounded-sm bg-zinc-100 px-3 pb-8 pt-12 shadow-xl md:px-8 flex-col-center">

      <div className="mb-4 border-b border-zinc-200 pb-1 flex-row-between w-full">
        <h2 className="text-3xl font-bold text-zinc-700">{page?.title}</h2>
        <Link
          href="/"
          className="center h-10 w-10 rounded-xl bg-zinc-200 duration-200 active:translate-y-1"
        >
          <FaArrowLeft className="text-zinc-600" />
        </Link>
      </div>

      <div className="prose prose-zinc w-full max-w-3xl border-b border-zinc-200 pb-3 pt-4 prose-h2:text-zinc-700 prose-p:text-lg prose-p:md:text-xl grow">
        <PortableText value={page.content} />
      </div>
      <p hidden={!page?.source} className="pt-2 italic text-zinc-500 w-full">
        {content.source}: {page?.source}
      </p>
    </section>
  );
}
