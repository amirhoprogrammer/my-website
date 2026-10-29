import ContactForm from "@/components/ContactForm";
import Contact from "./Contact";
import Question from "./Question";
import "./question.css";

export default function ContactMe() {
  return (
    <div className="bg-aboutme rounded-2xl flex mt-25 mx-5 question ">
      <div className="w-[40%] border-r-2 border-black leftside py-4 px-4">
        <Contact />
        <ContactForm />
      </div>
      {/*<div className="border-2 w-0.5 border-black line"></div>*/}
      <div className="w-[60%] rightside py-4 px-4">
        <Question />
      </div>
    </div>
  );
}
