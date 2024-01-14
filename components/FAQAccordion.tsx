import { type TItem } from "@/config/contstants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export const FAQAccordion = ({
  item,
  isLast,
}: {
  item: TItem;
  isLast: boolean;
}) => {
  return (
    <Accordion key={item.question} type="single" collapsible>
      <AccordionItem
        className={`${isLast ? "border-b-0" : "border-b"}`}
        value={item.question}
      >
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>{item.answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
