import React, { useState } from "react";
import axios from 'axios';
import Aichatpage from "../LoginComponents/Aichatpage";
import { useNavigate } from 'react-router-dom';
import '../LoginComponents/CSSFolder/Login.css';

export default function Login() {
  const [error, setError] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [alertFail, setAlertFail] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const showFail = (message, duration = 5000) => {
    setAlertFail(message);
    setIsAlert(true);
    setTimeout(() => {
      setIsAlert(false);
    }, duration);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  function isEmailValid(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function Click(e) {
    e.preventDefault();

    setError(null);
    setEmail(null);
    setPassword(null);

    if (!user.email || !user.password) {
      setError('Enter your email and password!');
      return;
    }

    if (!isEmailValid(user.email)) {
      setEmail('Enter a valid email address');
      return;
    }

    if (user.password.length < 2) {
      setPassword('Password is too short. It should be at least 2 characters.');
      return;
    }

    if (user.password.length > 15) {
      setPassword('Password is too long. It should be 15 characters or less.');
      return;
    }

    const { email, password } = user;

    axios.post("http://localhost:5000/login", { email, password }, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem("token", token);
          alert("Login Sucessfull.");
          // Pass token to your chat page component
          navigate('/aichat/prediction');
         

        }
      }).catch((error) => {
        if (error.response && error.response.status === 401) {
          showFail('Email or Password is not correct');
        } else {
          showFail('An error occurred. Please try again.');
        }
      });
  }
  
  return (
    <>
      <div id="all" className="text-xl">
        {isAlert && (
          <div className="alertFail">
            {alertFail}
          </div>
        )}

        <div style={{ fontFamily: 'Roboto', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '40px', fontWeight: '500', paddingBottom: '0.5ch' }}>
            Welcome Back!
          </span>
          <span style={{ paddingBottom: '2ch' }}>
            Sign in to your account!
          </span>
        </div>

        <div id="container1">
          {error && <p style={{ textAlign: 'justify', fontSize: '15px' }} className="text-red-900 font-normal">{error}</p>}
          
          <div id="Login_Label">
            <label id="Lables">Email</label>
            <input id="input1" onChange={handleChange} name="email" value={user.email} type="text" placeholder="" />
          </div>
          {Email && <p style={{ textAlign: 'justify', fontSize: '15px' }} className="text-red-900 font-normal">{Email}</p>}

          <div id="Login_Label">
            <label id="Lables">Password</label>
            <input id="input1" onChange={handleChange} name="password" value={user.password} type="password" placeholder="" />
         
            </div>
          {Password && <p style={{ textAlign: 'justify', fontSize: '15px' }} className="text-red-900 font-normal">{Password}</p>}

          <div style={{ textAlign: 'justify', padding: '1ch', fontSize: '15px', color: '#6b6b6b' }}>
            <label>
              <input
                style={{ marginRight: '0.5ch' }}
                type="checkbox"
              />
              Remember me
            </label>
          </div>

          <div style={{ justifyContent: 'space-between', padding: '1ch' }}>
            <button id="Login_btn" onClick={Click}>SIGN IN</button>
          </div>

        </div>
      </div>
    </>
  );
}
