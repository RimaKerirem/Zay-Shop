import { Container } from "../../components/modules";
import "./form-contact.css";

function FormContact() {
  return (
    <section className="form-contact">
      <Container>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="name-email">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input type="text" name="" id="name" placeholder="Name" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="" id="email" placeholder="Email" />
            </div>
          </div>

          <label htmlFor="subject">Subject</label>
          <input type="text" name="" id="subject" placeholder="Subject" />

          <label htmlFor="message">Message</label>
          <textarea name="" id="message" placeholder="Message"></textarea>

          <input type="submit" value="Let's Talk" />
        </form>
      </Container>
    </section>
  );
}

export default FormContact;
