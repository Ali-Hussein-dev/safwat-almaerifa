"use client";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="center h-10 w-10 rounded-xl bg-zinc-200 duration-200 active:translate-y-1"
    >
      <FaArrowLeft className="text-zinc-600" />
    </button>
  );
};
