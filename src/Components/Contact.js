import React from "react";
import "../../src/styles/contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="left">
          <h3>Let's get in touch</h3>
          <h4>We're open for suggestion or just to have a chat</h4>
          <div>
            <span>Address: </span>
            <p>193 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div>
            <span>Phone: </span>
            <p>+234 8137 9400 80</p>
          </div>
          <div>
            <span>Email: </span>
            <p>info@website.com</p>
          </div>
          <div>
            <span>Website: </span>
            <p>mywebsite.com</p>
          </div>
        </div>
        <div className="right">
          <h3>Get in touch</h3>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" required/>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <label htmlFor="messgae">Message</label>
          <textarea
            type="textarea"
            name="message"
            id="message"
            placeholder="Messgae"
          />
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
