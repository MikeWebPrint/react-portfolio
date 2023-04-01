import React from 'react'
import { useState } from 'react'
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';
import Botpoison from "@botpoison/browser";
const botpoison = new Botpoison({
  publicKey: "pk_b9b027dd-3a45-4dc1-9a0e-081957e1a66c"
});

function ContactForm() {
  // Here we set two state variables for inputs using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const FORMSPARK_ACTION_URL = "https://submit-form.com/BHqExEtM";


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of name, email, and message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!email || !name) {
      setErrorMessage('Name and email are required');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      return;
    }
    const { solution } = await botpoison.challenge();
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name, 
        email,
        message,
        _botpoison: solution,
      }),
    });
    // Clear the inputs
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('Thank you for contacting me!');
  };

  return (
    <div>
      <h3>
        Find Me Here:
      </h3>
      <section id="contact">
    <nav>
        <p>Github: <a href="https://github.com/MikeWebPrint" target="_blank" rel="noreferrer">github.com/MikeWebPrint</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mike-johnson-25b08836/" target="_blank" rel="noreferrer">mike-johnson-25b08836</a></p>
        <p><a href="https://painted-temple-59f.notion.site/Resume-67dc4fd6d2af4e4c988a9541d12dbb86" target="_blank" rel="noreferrer">View Current Resume</a></p>
        <p>Email: <a href="mailto:mikewebprint@gmail.com">MikeWebPrint@gmail.com</a></p>
        <p>Phone: <a href="tel:18603815470">860.381.5470</a></p>
    </nav>
  </section>
  <h3>Contact me for more info</h3>
      <form className="form" onSubmit={handleFormSubmit} action="https://formsubmit.io/send/c1add0ef-ce70-4861-9fa0-85309be78826" method="POST">
        <div>
          <label htmlFor='name'>Name *</label><br />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            required
          />
          <input name="_formsubmit_id" type="text" className='d-none'></input>
        </div>
        <div>
        <label htmlFor='email'>Email *</label><br />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Message </label><br />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            cols="75"
            rows="10"
            // type="textarea"
            placeholder="Message"
          />
        </div>
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
export default ContactForm