import {
  Accordion,
  AccordionContainer,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
} from "./uilayouts/accordion";
import { QuestionData } from "@/data/QuestionData";
import { Question } from "@/utils/types";
export default function QuestionTabs() {
  return (
    <AccordionContainer className="grid-cols-1 mx-2">
      <AccordionWrapper>
        <Accordion>
          {QuestionData.map((question, index) => {
            return (
              <AccordionItem
                value={`items-${index}`}
                className="hover:text-foreground"
                key={index}
              >
                <AccordionHeader className="2xl:text-base text-sm text-moon bg-card hover:text-foreground data-active:text-moon data-active:bg-card">
                  {question.question}
                </AccordionHeader>
                <AccordionPanel className="2xl:text-base text-sm text-moon bg-card hover:text-foreground data-active:text-moon data-active:bg-card">
                  {question.answer}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </AccordionWrapper>
    </AccordionContainer>
  );
}
