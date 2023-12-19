import { getStaticPage } from "@sanity/lib/get-static-page";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
const content = {
  updatedAt: "آخر تعديل",
};
export const revalidate = 18000; // 5 hour
//======================================
const AboutPage = async () => {
  const page = await getStaticPage({ slug: "about" });
  return (
    <div className="grow flex-col-start ">
      <article className="shadow-side prose prose-zinc mx-auto h-full w-full max-w-3xl grow rounded-sm bg-zinc-50 px-3 pb-4 pt-10 prose-p:text-lg md:px-6 md:pt-16">
        <PortableText value={page?.content} />
        <p className="border-t pt-1 font-light">
          {content.updatedAt}:{" "}
          {format(new Date(page._updatedAt), "dd.MM.yyyy / hh:mm")}
        </p>
      </article>
    </div>
  );
};
export default AboutPage;
