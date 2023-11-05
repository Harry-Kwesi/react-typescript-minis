import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement> )=> {
    setEmail(e.target.value)
  }

  const handleSubscribe = (e:React.FormEvent) => {
      e.preventDefault()

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if(!emailRegex.test(email)){
       toast.error('invalid email format')
      } else {
        localStorage.setItem('email', email);
        toast.success('Email saved successfully');
      }

      setEmail('');
    }
    

  return (
    <>
      <div>
        <div className="cardText">
          <div>
            <h2>Barsby</h2>
          </div>
          <div>
            <p>
              Sign up for our free newsletter so that you can receive weekly
              coding challenges that can help you improve your frontend
              development skills
            </p>
          </div>
        </div>
        <div className="inputItems">
          <input
            type="text"
            placeholder="Enter your email address"
            id="emailInput"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button className="subscribe" onClick={handleSubscribe}>Subscribe</button>
        </div>
        <div className="info">
          <input type="checkbox" id="mycheckbox" />
          <p>
            By checking this box you agree to receive our weekly newsletter
            containing our latest deals and you may unsubscribe from the newsletter at anytime{" "}
          </p>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
