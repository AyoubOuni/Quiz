import React, { useState } from 'react';
import  './../../Assets/Css/forgetpassword.css'
import {FaKey} from 'react-icons/fa'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import Navtop from "../Nav/Navtop";

const Checkemail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can add your logic to handle form submission here, like sending the email for password reset.
  };

  return (
    <div className="template-login">
    <Navtop/>
    <div>
      <div className="d-flex justify-content-center pt-5">
        <div className="width-small2">
          <div className="d-flex justify-content-center pt-5">
            <FaKey size={30} />
          </div>
          <div className="mt-3">
            <div className="text-center title">Forgot Password?</div>
            <p className="text-center little">You can reset your password here.</p>
            <form onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="email" className="form-label ms-1 h6">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  className="form-control ps-1"
                  style={{ height: '45px' }}
                  type="email"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <br />
              
              <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn-21 text-white text-nowrap">
                  Reset Password
                </button>
              </div>
            </form>
            <div className="d-flex justify-content-center mt-4">
              <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
                <span className="position-relative" style={{ top: '-1px', right: '9px' }}>
                    <MdOutlineKeyboardBackspace size={23}/>
                </span>
                <span className="h6">Back to log in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checkemail;
