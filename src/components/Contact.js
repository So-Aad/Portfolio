import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage("Thank you ! Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccessMessage(""), 5000); // Hide message after 5 seconds
    }
  };

  return (
    <>
      <h1 className="text-center contactText">CONTACT ME</h1>
      <div className="contact-container container-fluid">
        <div className="row align-items-center">
          {/* Contact Form on the Left */}
          <div className="col-lg-6 col-md-12">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Message *"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-custom">SEND MESSAGE</button>
              </div>
              {successMessage && <p className="text-success text-center mt-3">{successMessage}</p>}
            </form>
          </div>
          
          {/* Contact Info on the Right */}
          <div className="col-lg-6 col-md-12 contact-info">
            <p>
              <strong>Let’s Connect!</strong> <span className="highlight">Whether you have a project in mind, a question, or just want to say hello, I’d love to hear from you 😊 !</span>
              <br /> <br />
              <span className="animated-text">Feel free to drop me a message, and I’ll get back to you as soon as possible.</span>
              <br /> <br />
              <span className="creative-text">Let’s create something <span className="gradient-text">amazing</span> together!</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="contact-footer">
        <div className="container text-center">
          <p><FaEnvelope /> Email: chafyqsoaad@gmail.com</p>
          <p><FaPhone /> Phone: +212 6 10 22 84 42</p>
          <p><FaWhatsapp /> WhatsApp: +212 6 10 22 84 42</p>
          <p><FaLinkedin /> <a href="https://linkedin.com/in/soaad-chafyq-353052290/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </footer>
    </>
  );
};

export default ContactForm;
