const content = {
  label: "يتم تحميل الصفحة...",
};
export default function Loading() {
  return (
    <div className="text-center text-3xl text-slate-800">{content.label}</div>
  );
}
