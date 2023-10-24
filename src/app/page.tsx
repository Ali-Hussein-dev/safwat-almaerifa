import { Hero } from "@/components/Hero/Hero";

export default function RootPage() {
  return (
    <div className="relative h-full w-full grow px-2 sm:px-4">
      <div className="mx-auto max-w-3xl pt-4 md:pt-28">
        <Hero />
      </div>
    </div>
  );
}
