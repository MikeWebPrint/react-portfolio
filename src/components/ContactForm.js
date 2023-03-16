import React from 'react'
import { useState } from 'react'
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';


function ContactForm() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


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

  const handleFormSubmit = (e) => {
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
    // Clear the inputs
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div>
      <h3>
        Find Me Here:
      </h3>
      <section id="contact">
    {/* <h3>Contact Me</h3> */}
    <nav>
    {/* <ul>
        <li>Github: <a href="https://github.com/MikeWebPrint" target="_blank" rel="noreferrer">github.com/MikeWebPrint</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/mike-johnson-25b08836/" target="_blank" rel="noreferrer">mike-johnson-25b08836</a></li>
        <li><a href="https://painted-temple-59f.notion.site/Resume-67dc4fd6d2af4e4c988a9541d12dbb86" target="_blank" rel="noreferrer">View Current Resume</a></li>
        <li>Email: <a href="mailto:mikewebprint@gmail.com">MikeWebPrint@gmail.com</a></li>
        <li>Phone: <a href="tel:18603815470">860.381.5470</a></li>
      </ul> */}
        <p>Github: <a href="https://github.com/MikeWebPrint" target="_blank" rel="noreferrer">github.com/MikeWebPrint</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mike-johnson-25b08836/" target="_blank" rel="noreferrer">mike-johnson-25b08836</a></p>
        <p><a href="https://painted-temple-59f.notion.site/Resume-67dc4fd6d2af4e4c988a9541d12dbb86" target="_blank" rel="noreferrer">View Current Resume</a></p>
        <p>Email: <a href="mailto:mikewebprint@gmail.com">MikeWebPrint@gmail.com</a></p>
        <p>Phone: <a href="tel:18603815470">860.381.5470</a></p>
    </nav>
  </section>
  <h3>Contact me for more info</h3>
      <form className="form" action="https://submit-form.com/BHqExEtM">
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