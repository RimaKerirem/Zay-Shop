import { FormContact, HeroContact } from "../../sections/modules";
import "./contact.css";

function Contact() {
  document.title = "Zay Shop - Contact";

  return (
    <>
      <HeroContact />
      <FormContact />
    </>
  );
}

export default Contact;
