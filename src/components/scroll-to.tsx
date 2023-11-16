"use client";
import { useWindowScroll } from "@mantine/hooks";
import { Button } from "./ui/button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

//======================================
export const ScrollTo = () => {
  const [{ y }, scrollTo] = useWindowScroll();
  return (
    <Button
      className="fixed bottom-5 right-4 z-50 shadow-xl md:bottom-10 md:right-10"
      size="icon"
      variant="outline"
      type="button"
      onClick={() => scrollTo({ y: y < 500 ? document.body.scrollHeight : 0 })}
    >
      {y < 500 ? <FaChevronDown /> : <FaChevronUp />}
    </Button>
  );
};
