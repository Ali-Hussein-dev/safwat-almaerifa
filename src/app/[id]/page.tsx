import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { getNamePage } from "../../../sanity/lib/get-name-page";
import { PortableText } from "@portabletext/react";
import { type NamePage } from "@/types/name-project";

export default async function NamePage({ params }: { params: { id: string } }) {
  const pageRes = await getNamePage(params.id);
  const page= pageRes[0]!;
  return (
    <section className="mx-auto w-full max-w-3xl grow rounded-sm bg-zinc-50 px-2 pt-10 md:px-6">
      <div className="py-2 flex-row-between">
        <h2 className="mb-4 text-3xl font-bold text-zinc-700">
          {page.title}
        </h2>
        <Link
          href="/"
          className="center h-10 w-10 rounded-xl bg-zinc-200 duration-200 active:translate-y-1"
        >
          <FaArrowLeft className="text-zinc-600" />
        </Link>
      </div>
      <div className="prose prose-h2:text-zinc-700 prose-p:text-lg">
        <p>{page.description}</p>
        <PortableText value={page.content} />
      </div>
    </section>
  );
}
