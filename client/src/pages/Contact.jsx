import ContactForm from '../components/ContactForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquare } from '@fortawesome/free-solid-svg-icons';

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
