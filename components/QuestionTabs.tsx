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
        <Accordion defaultValue={"items"}>
          {QuestionData.map((Question, index) => {
            return (
              <AccordionItem
                value="item-1"
                className="bg-background"
                key={index}
              >
                <AccordionHeader className="2xl:text-base text-sm text-command bg-foreground hover:text-computer">
                  {Question.question}
                </AccordionHeader>
                <AccordionPanel className="2xl:text-base text-sm text-command bg-foreground hover:text-computer">
                  {Question.answer}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </AccordionWrapper>
    </AccordionContainer>
  );
}
