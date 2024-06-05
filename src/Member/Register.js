import React, { useEffect, useState } from "react";
import './register.css';
import axios from 'axios';
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import pic from '../Pic/bg.jpg'

export default function Register() {
  const divStyle = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
  };

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Confirm, setConfirm] = useState(null);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID })
    });
  }, []);

  function Click(e) {
    e.preventDefault();

    setError(null);
    setName(null);
    setEmail(null);
    setPassword(null);
    setConfirm(null);

    if (!user.name || !user.email || !user.password || !user.confirmPass) {
      setError('All fields are required');
      return;
    }
    if (user.name.length < 2) {
      setName('Name is too short. It should be at least 2 characters.');
      return;
    }
    if (user.name.length > 15) {
      setName('Name is too long. It should be 15 characters or less.');
      return;
    }
    if (!isEmailValid(user.email)) {
      setEmail('Enter a valid email address');
      return;
    }
    if (user.password.length < 6) {
      setPassword('Password is too short. It should be at least 6 characters.');
      return;
    }
    if (user.password.length > 15) {
      setPassword('Password is too long. It should be 15 characters or less.');
      return;
    }
    if (user.password !== user.confirmPass) {
      setConfirm('Passwords do not match.');
      return;
    }

    axios.post("http://localhost:5000/signup", {
      name: user.name,
      email: user.email,
      password: user.password,
      confirm_password: user.confirmPass
    })
      .then((res) => {
        if (res.status === 201) {
          alert(res.data.message);
          navigate("/login");
        } else if (res.status === 409) {
          setError('Email is already registered. Please use a different email.');
        }
      })
      .catch((error) => {
        alert.error("An error occurred:", error);
        if (error.response && error.response.status === 409) {
          setError('Email is already registered. Please use a different email.');
        } else {
          setError('Registration failed. Please try again.');
        }
      });
  }

  function isEmailValid(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: ""
  });

  function handleSignIn() {
    navigate('/login');
  }

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div style={{ backgroundColor: 'white' }} className="md:w-3/5 lg:w-3/5 min-h-screen space-y-3">
          <div className="mt-4"></div>
          <div className="mt-4 mx-auto w-11/12 space-y-3 md:w-10/12">
            <div className="space-y-2 text-center">
              <h1 className="font-semibold text-2xl text-black">
                Begin your journey
              </h1>
              <p className="text-stone-700">No Credit required</p>
            </div>
          </div>
          <form className="w-10/12 mx-auto flex-col">
            <div className="flex flex-col">
              {error && <p style={{ fontSize: '15px' }} className="text-red-900 font-normal">{error}</p>}
              <label id="Reg_labels" className="text-black">Name</label>
              <input id="Reg_input" onChange={handleChange} name='name' value={user.name} className="p-1 rounded-lg border-2 border-gray-400"></input>
              {Name && <p style={{ fontSize: '15px' }} className="text-red-900 font-normal">{Name}</p>}
            </div>
            <div className="flex flex-col mt-4">
              <label id="Reg_labels" className="text-black">Email</label>
              <input id="Reg_input" onChange={handleChange} name='email' value={user.email} className="p-1 rounded-lg border-2 border-gray-400"></input>
              {Email && <p style={{ fontSize: '15px' }} className="text-red-900 font-normal">{Email}</p>}
            </div>
            <div className="flex flex-col mt-4">
              <label id="Reg_labels" className="text-black">Password</label>
              <input id="Reg_input" type="password" onChange={handleChange} name='password' value={user.password} className="p-1 rounded-lg border-2 border-gray-400"></input>
              {Password && <p style={{ textAlign: 'justify', fontSize: '15px' }} className="text-red-900 font-normal">{Password}</p>}
            </div>
            <div className="flex flex-col mt-4">
              <label id="Reg_labels" className="text-black">Confirm Password</label>
              <input id="Reg_input" type="password" onChange={handleChange} name='confirmPass' value={user.confirmPass} className="p-1 rounded-lg border-2 border-gray-400"></input>
              {Confirm && <p style={{ textAlign: 'justify', fontSize: '15px' }} className="text-red-900 font-normal">{Confirm}</p>}
            </div>
            <label style={{ fontSize: '15px', fontWeight: '300', paddingTop: '1ch' }}>
              <input style={{ marginRight: '0.5ch' }} type="checkbox" />
              Remember me
            </label>
          </form>
          <div className="space-y-2">
            <div className="space-y-1">
              <Link onClick={Click} to="#" className="flex mx-auto p-1 text-white justify-center bg-orange-600 rounded-lg space-x-3 w-10/12">
                Sign Up
              </Link>
            </div>
          </div>
          <div style={{ fontFamily: 'Roboto' }} className="text-center">
            <span style={{ color: '#6b7280' }}>Already Registered? </span>
            <span id="SignIn_btn" className="ml-1" onClick={handleSignIn}> Sign In</span>
          </div>
        </div>
        <div className="w-full min-h-full">
          <div style={divStyle}>
            <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Roboto', fontSize: '30px' }}>
              <span>Predicting judicial decisions from legal cases.Collaboration between legal experts and data scientists</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
