import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
const content = {
  references: "المراجع المعتمدة",
  madeBy: " تصميم وتطوير ",
  links: [
    {
      href: "https://twitter.com/safwatelma3refa",
      icon: <FaXTwitter size="17" />,
    },
  ],
};
export const Footer = () => {
  return (
    <div
      className="isolate mx-auto h-20 w-full border-t border-zinc-300 bg-gradient-to-t from-zinc-950 to-zinc-800 px-2 py-2 text-zinc-100 flex-row-center"
      dir="ltr"
    >
      <div className="w-full max-w-3xl gap-3 flex-row-center">
        <div className="">
          {content.links.map((link, i) => (
            <span key={i} className="center">
              <a
                href={link.href}
                className=" text-zinc-100 hover:text-zinc-200"
              >
                {link.icon}
              </a>
            </span>
          ))}
        </div>
        <div>
          <a href="https://ali-hussein.com" className="hover:font-medium">
            {content.madeBy}
          </a>
        </div>
        <Link href="/references" className="hover:font-medium">
          {content.references}
        </Link>
      </div>
    </div>
  );
};
