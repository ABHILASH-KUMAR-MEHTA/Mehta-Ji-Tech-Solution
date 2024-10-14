import React, { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [Contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...Contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Contact),
      });
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <>
      <section className="section-contact">
        '
        <div className="contact-contect container">
          <h1 className="main-heading">Contact Us</h1>
          <div className="container grid grid-two-cols">
            <div className="conatct-image">
              <img
                className="register"
                src="/images/register.png"
                alt=""
                width="80%"
                height="auto"
              />
            </div>
            <section className="section-form">
              <form className="" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={Contact.username}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={Contact.email}
                  onChange={handleInput}
                  required
                />
                <div>
                  <label htmlFor="message">messge</label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    value={Contact.message}
                    onChange={handleInput}
                    required
                    cols="30"
                    rows="7"
                  ></textarea>
                </div>
                <div>
                  <button type="submit">Contact</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4219.2399595836705!2d77.99131898797944!3d27.220901754628034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747761bf8bb5eb%3A0x6f51da74985829b4!2sSheetla%20Rd%2C%20Agra%2C%20Uttar%20Pradesh%20282005!5e0!3m2!1sen!2sin!4v1727158597019!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
