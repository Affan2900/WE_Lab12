import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <h3>Other Ways to Reach Me</h3>
      <ul>
        <li>Email: affan@email.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>
      <p>Preferred contact method: Email</p>
    </div>
  );
};

export default Contact;

