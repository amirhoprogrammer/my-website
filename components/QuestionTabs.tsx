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
                className="hover:text-computer"
                key={index}
              >
                <AccordionHeader className="2xl:text-base text-sm text-command bg-foreground hover:text-computer data-active:text-command data-active:bg-foreground">
                  {question.question}
                </AccordionHeader>
                <AccordionPanel className="2xl:text-base text-sm text-command bg-foreground hover:text-computer data-active:text-command data-active:bg-foreground">
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
