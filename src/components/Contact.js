import React, { useState } from 'react';
import '../styles/Contact.css';



function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const inputKeys = ['userName', 'email', 'message'];

  const [INPUT_NAME, INPUT_MAIL, INPUT_MSSG] = inputKeys;

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateNonEmpty = (text) => {
    return typeof (text) === String && text !== "";
  }

  const validateInput = {
    [INPUT_NAME]: validateNonEmpty,
    [INPUT_MAIL]: validateEmail,
    [INPUT_MSSG]: validateNonEmpty
  }

  const errorMessages = {
    [INPUT_NAME] : 'Please tell me your name',
    [INPUT_MAIL] : 'email seems to be invalid',
    [INPUT_MSSG] : 'Please write something'
  };

  const handleFocusOut = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    console.log('validateInput:', validateInput);
    console.log('validateInput[inoutType]:', validateInput[inputType]);


    if (inputKeys.includes(inputType) && !validateInput[inputType](inputValue))
      setErrorMessage(errorMessages[inputType]);
  }

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // process request

    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='row'>
      <div className='col-lg-6 col-md-9 col-sm-12 col-12'>
        <form className="form">
          <label labelfor='userName'>Name</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            onBlur={handleFocusOut}
          />

          <label labelfor='email'>Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            onBlur={handleFocusOut}
          />

          <label labelfor='message'>Message</label>
          <div>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder=""
              onBlur={handleFocusOut}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
