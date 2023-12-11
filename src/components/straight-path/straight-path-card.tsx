import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import * as React from "react";

export const StraightPathCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <AccordionItem value={title} className="px-2 md:px-4">
      <AccordionTrigger className="w-full px-0 py-3 font-semibold text-sky-400 hover:text-sky-500">
        {title}
      </AccordionTrigger>
      <AccordionContent className="space-y-3 border-t pt-2">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};
