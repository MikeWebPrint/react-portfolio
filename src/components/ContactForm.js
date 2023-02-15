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
        Contact Me!
      </h3>
      <form className="form">
        <label htmlFor='name'>Name</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
          required
        />
        <label htmlFor='message'>Message</label>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
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