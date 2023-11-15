const content = {
  h2: "المراجع المعتمدة",
  list: [
    {
      label: "كتاب المسند الأسنى للأمام أبو حامد الغزالي",
      href: "https://app.turath.io/book/6465",
    },
    { label: "موقع القرآن الكريم", href: "https://quran.com/" },
    { label: "موقع الدرر السنية", href: "https://dorar.net/tafseer" },
    { label: "موقع موضوعات", href: "https://almalomat.com/" },
  ],
};
export const metadata = {
  title: "المراجع المعتمدة",
};
const ReferencesPage = () => {
  return (
    <div className="prose prose-zinc mx-auto w-full max-w-3xl grow bg-zinc-100 px-3 pt-4 md:px-8 md:pt-20">
      <h2>{content.h2}</h2>
      <ul>
        {content.list.map((item, i) => (
          <li key={i}>
            <a href={item.href} target="_blank">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferencesPage;
