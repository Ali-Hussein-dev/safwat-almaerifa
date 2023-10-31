"use client";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ActionIcon } from "./action-icon";

export const BackButton = () => {
  const router = useRouter();
  return (
    <ActionIcon onClick={() => router.back()}>
      <FaArrowLeft className="group-hover:text-zinc-100" />
    </ActionIcon>
  );
};