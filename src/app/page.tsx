import { Hero } from "@/components/Hero/Hero";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "مواضيع إسلامية أساسية",
  description: "المواضيع الإسلامية التي يحتاجها كل مسلم",
  category: "إسلام",
};
export default function RootPage() {
  return (
    <div className="relative h-full w-full grow px-2 sm:px-4">
      <Hero />
    </div>
  );
}
