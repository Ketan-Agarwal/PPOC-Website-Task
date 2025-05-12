import { title } from "@/components/primitives";
import ContactUs from "./contactus";

export default function ContactPage() {
  return (
    <div className="mt-20">
      <h1 className={title()}>Contact Us.</h1>
      <ContactUs />
    </div>
  );
}
