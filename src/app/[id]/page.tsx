import { getNamePage } from "../../../sanity/lib/get-name-page";
import { PortableText } from "@portabletext/react";
import { type NamePage } from "@/types/name-project";
import { BackButton } from "@/components/back-button";

const content = {
  source: "المرجع",
};
export const revalidate = 30;

export default async function NamePage({ params }: { params: { id: string } }) {
  const pageRes = await getNamePage(params.id);
  const page = pageRes[0]!;
  return (
    <>
      <div className="mb-4 w-full border-b border-zinc-200 pb-1 flex-row-between">
        <h2 className="text-3xl font-bold text-zinc-700">{page?.title}</h2>
        <BackButton />
      </div>
      <div className="prose prose-zinc w-full max-w-3xl grow border-b border-zinc-300 pb-3 pt-4 prose-h2:text-zinc-700">
        <PortableText
          value={page.content}
          components={{
            block: ({ children }) => (
              <p className="text-lg leading-relaxed tracking-wide text-zinc-700 md:text-xl">
                {children}
              </p>
            ),
          }}
        />
      </div>
      <p hidden={!page?.source} className="w-full pt-2 italic text-zinc-500">
        {content.source}: {page?.source}
      </p>
    </>
  );
}
