import { getNamePage, getPageTitle } from "@sanity/lib/get-name-page";
import { PortableText } from "@portabletext/react";
import { type NamePage } from "@/types/name-project";
import type { Metadata } from "next";
import * as React from "react";
import { ReadingPage } from "@/components/reading-container/reading-page";

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
  };
}

export default async function NamePage({ params }: { params: { id: string } }) {
  const pageRes = await getNamePage(params.id);
  const page = pageRes[0]!;
  return (
    <>
      <ReadingPage
        grow
        top={
          <div className="mb-4 w-full border-b border-zinc-200 pb-1 flex-row-between">
            <h2 className="text-3xl font-bold">{page?.title}</h2>
          </div>
        }
        body={
          <React.Suspense
            fallback={<p className="w-full text-center">{content.loading}</p>}
          >
            <PortableText value={page?.content} />
          </React.Suspense>
        }
        bottom={
          <p
            hidden={!page?.source}
            className="mt-2 w-full border-t border-zinc-300 pt-1 italic"
          >
            {content.source}: {page?.source}
          </p>
        }
      />
    </>
  );
}
