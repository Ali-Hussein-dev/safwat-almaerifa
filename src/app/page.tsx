import { NamesList } from "@/components/names-list";
import { getAllPages } from "../../sanity/lib/get-name-page";

const content = {
  h1: "أسماء الله الحسنى",
  p: "تعرف على خالقك كي لاتسئ الظن أو تغتر بماأعطاك و لاتكون حيداً",
};
export const metadata = {
  title: "أسماء الله الحسنى",
  description: "أسمى الله الحسنى مع شرح لكل اسم",
};
export default async function RootPage() {
  const pages = (await getAllPages()).sort((a,b)=> +a.slug - +b.slug)
  return (
    <div className="relative mx-auto h-full w-full max-w-3xl grow space-y-8 pt-10 px-2 sm:px-4 flex flex-col justify-start">
        <div className="pt-4 md:pt-16">
          <h1 className="mb-1 text-center text-lg font-extrabold text-zinc-700 sm:text-2xl md:text-4xl">
            {content.h1}
          </h1>
          <p className="text-center text-zinc-500 text-lg">{content.p}</p>
        </div>
        <NamesList names={pages} />
      </div>
  );
}
