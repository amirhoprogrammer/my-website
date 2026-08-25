import Contacts from "@/components/Contacts";
import Icon from "@/components/Icon";
import { ContactOfMe } from "@/data/ContactsOfMe";
import { iconData } from "@/data/iconData";
export default function Contact() {
  return (
    <div className="mx-3">
      <div className="my-2 ">
        <h2 className="text-3xl">Contact Me</h2>
      </div>
      <div className="">
        <Contacts items={ContactOfMe[0]} />
        <Contacts items={ContactOfMe[1]} />
        <Contacts items={ContactOfMe[2]} />
      </div>
      <div className="flex gap-3 items-center justify-center">
        {<Icon item={iconData[0]} />}
        {<Icon item={iconData[1]} />}
        {<Icon item={iconData[2]} />}
      </div>
    </div>
  );
}
