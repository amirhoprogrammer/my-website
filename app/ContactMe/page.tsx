import ContactForm from "@/components/ContactForm";
import Contact from "./Contact";
import Question from "./Question";

export default function ContactMe() {
  return (
    <div className="bg-aboutme rounded-2xl flex mt-20 mx-5">
      <div className="w-[30%]">
        <Contact />
        <ContactForm />
      </div>
      <div className="border-2 w-0.5 border-black"></div>
      <div>
        <Question />
      </div>
    </div>
  );
}
