import { H1 } from "@/components/headers";
const content = {
  title: "أسئلة متكررة عن القرآن الكريم",
  note: "لم يتم إنشاء محتوى لهذه الصفحة بعد",
};
//======================================
const QuranFAQs = () => {
  return (
    <div className="page-container">
      <div className="mx-auto max-w-3xl">
        <H1 value={content.title} />
        <p className="pt-2 text-center text-xl">{content.note}</p>
      </div>
    </div>
  );
};
export default QuranFAQs;
