import ContactForm from "@/components/ContactForm";
import Contact from "./Contact";
import Question from "./Question";
import "./question.css";

export default function ContactMe() {
  return (
    <div className="bg-aboutme rounded-2xl flex mt-20 mx-5 question">
      <div className="w-[35%] leftside">
        <Contact />
        <ContactForm />
      </div>
      <div className="border-2 w-0.5 border-black line"></div>
      <div className="w-[60%] rightside">
        <Question />
      </div>
    </div>
  );
}
