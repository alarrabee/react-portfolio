import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


const styles = {
    errorMsg: {
        color: 'red',
    },
    textColor: {
        color: '#b30089'
    },
    button: {
        backgroundColor: '#FD96A9',
        color: 'black'
      }
};

//contact form
function Contact() {
  const [senderName, setSenderName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    setErrorMessage('');

    if (inputType === 'senderName') {
      setSenderName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setDisplayForm(false)
    setSenderName('');
    setEmail('');
    setMessage('');
  };


return (
    <div className="container text-center mt-5">
      <h1 className="mb-4" style={styles.textColor}>Send a Message!</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <input
            value={senderName}
            name="senderName"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-3">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group mb-3">
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            className="form-control"
            rows="4"
            placeholder="Your message here"
          />
        </div>
        <button type="submit" className="btn btn-primary" style={styles.button}>Send</button>
      </form>
      {errorMessage && (
        <div className="mt-3">
          <p className="error-text" style={styles.errorMsg}>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;