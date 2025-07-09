import { useState } from 'react'

const Form =  () =>{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationText, setConfirmationText] = useState('');

  const isFormValid = firstName && lastName && email && message;

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {

    e.preventDefault();
    setConfirmationText(`Thanks ${firstName} ${lastName}! We will contact you at ${email}.`);

    // Clear all input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Last name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" disabled={!isFormValid}>
          Send
        </button>
      </form>
      {confirmationText && <p>{confirmationText}</p>}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
    </>
  )
}

export default App
