import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

interface FAQProps {
  limit?: number;
  items?: typeof faqs;
}

export function FAQ({ limit, items }: FAQProps) {
  const list = items ?? faqs;
  const display = typeof limit === "number" ? list.slice(0, limit) : list;

  return (
    <Accordion type="single" collapsible className="w-full">
      {display.map((faq, index) => (
        <AccordionItem key={faq.question} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
