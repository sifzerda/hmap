import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="separator-line"></div>

      <div className="form-box">

        <h1>Leave A Message</h1>
        <ContactForm />
      </div>

      <div className="separator-line"></div>

    </div>
  );
}
