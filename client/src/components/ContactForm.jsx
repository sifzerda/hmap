import '../App.css';
import { useState } from 'react';

function ContactForm() {
    const [input, setInput] = useState({
        name: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            name: '',
            message: '',
        });
        setSubmitted(true);
    };

    return (
     <div className="form-container">
        {submitted ? (
          <div className="confirmation-message">
            <p>Thank you for your message!</p>
          </div>
        ) : (

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder="Name or contact reference..."
                    id="name"
                    name="name"
                    value={input.name}
                    className="contact-form-input"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    placeholder="Enter your message here"
                    name="message"
                    value={input.message}
                    className="contact-form-input"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className='centered-button'>Submit</button>
        </form>
)}
        </div>
    );
}

export default ContactForm;
