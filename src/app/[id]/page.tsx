import { getNamePage, getPageTitle } from "../../../sanity/lib/get-name-page";
import { PortableText } from "@portabletext/react";
import { type NamePage } from "@/types/name-project";
import { BackButton } from "@/components/back-button";
import type { Metadata } from "next";
import * as React from "react";
import clsx from "clsx";

const content = {
  source: "المرجع",
  loading: "جاري تحميل المحتوى...",
};
export const revalidate = 30;
type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const article = await getPageTitle(params.id);
  const title = article?.[0]?.title ?? "";
  const description = article?.[0]?.description ?? "";
  return {
    title,
    description,
    // openGraph: {
    //   type: "article",
    //   // publishedTime,
    // },
  };
}

export default async function NamePage({ params }: { params: { id: string } }) {
  const pageRes = await getNamePage(params.id);
  const page = pageRes[0]!;
  return (
    <>
      <div className="mb-4 w-full border-b border-zinc-200 pb-1 flex-row-between">
        <h2 className="text-3xl font-bold text-zinc-700">{page?.title}</h2>
        <BackButton />
      </div>
      <div
        className={clsx(
          "prose prose-zinc w-full max-w-3xl grow border-b border-zinc-300 pb-3 pt-4",
          // h2,h3
          "prose-h2:text-zinc-700 prose-h3:text-zinc-700",
          // p
          "text-zinc-700 prose-p:text-lg prose-p:leading-relaxed prose-p:tracking-wide prose-p:md:text-xl",
        )}
      >
        <React.Suspense
          fallback={<p className="w-full text-center">{content.loading}</p>}
        >
          <PortableText value={page?.content} />
        </React.Suspense>
      </div>
      <p hidden={!page?.source} className="w-full pt-2 italic text-zinc-500">
        {content.source}: {page?.source}
      </p>
    </>
  );
}
