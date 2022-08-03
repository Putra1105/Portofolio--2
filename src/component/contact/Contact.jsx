import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiInstagram } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aglz8n2', 'template_6y9yo4u', form.current, 'wHQxiAT-9AcxIpGYq').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            <h5>putrarizky67@gmail.com</h5>
            <a href="mailto:putrarizky67@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <SiInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>putrarizkyr11</h5>
            <a href="https://www.instagram.com/putrarizkyr11/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
