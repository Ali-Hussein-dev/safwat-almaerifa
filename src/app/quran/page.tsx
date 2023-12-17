import { H1 } from "@/components/headers";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

const content = {
  title: "القرآن الكريم",
  description: "كل مايجب عليك تعّلمه ومعرفته عن القرآن الكريم لغير المختصين",
  list: [
    {
      title: "مواضيع سور القرآن الكريم",
      description:
        "مواضيع القرآن بشكل مبسط يساعد على التنقل بين السور والآيات على أساس الموضوع",
      href: "/quran-topics",
      status: "المحتوى قيد الإنشاء",
    },
    {
      title: "أسئلة متكررة عن القرآن الكريم",
      description:
        "الإجابة عن أسئلة متكررة عن القرآن الكريم للمسلم وغير المسلم",
      href: "/quran-faq",
      status: "لا يوجد محتوى بعد",
    },
  ],
  label: "التنفيذ",
};
const Card = ({
  title,
  description,
  href,
  status,
}: (typeof content.list)[0]) => (
  <Link
    href={href}
    className="group flex flex-col justify-between rounded border-b-2 border-r-2 bg-gradient-to-t from-zinc-100/60 to-zinc-50/10 px-4 pb-3 pt-6 shadow duration-300 hover:shadow-lg"
  >
    <h3 className="text-grad-zinc mb-1 text-xl font-semibold">{title}</h3>
    <p className="flex-grow border-b-[0.5px] border-zinc-300 pb-2">
      {description}
    </p>
    <div className="flex-row-between">
      <span className="pt-1 text-zinc-500">
        {content.label}: {status}
      </span>
      <GoLinkExternal className="scale-0 text-sky-500 duration-200 group-hover:scale-100" />
    </div>
  </Link>
);
//======================================
const QuranPage = () => {
  return (
    <div className="h-full flex-grow pt-10 md:pt-16">
      <div className="mx-auto max-w-3xl px-2 text-zinc-700 md:px-0">
        <div className="mb-6">
          <H1 value={content.title} />
          <p className="text-center text-lg">{content.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {content.list.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuranPage;
