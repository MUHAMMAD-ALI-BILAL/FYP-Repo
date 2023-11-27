import {React} from "react";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import {GoLogoGithub} from 'react-icons/go';
import { useState, useEffect } from 'react';
import Logo from '../Pic/Logo2.png'
import '../LoginComponents/CSSFolder/Login.css';

export default function Login() {

  const [error, setError] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [token, setToken] = useState(null);
  const [alertFail, setAlertFail] = useState('');
  const [isAlert, setIsAlert] = useState(false);  

  const navigate = useNavigate();

  const [user, Setuser] = useState({
    email: "",
    password: ""
  })

  const showFail = (message, duration = 5000) => {
    setAlertFail(message);
    setIsAlert(true);

    // Hide the alert after the specified duration (default: 2000 milliseconds)
    setTimeout(() => {
      setIsAlert(false);
    }, duration);
  };    


  useEffect(() => {
    const token = localStorage.getItem("token");
      if (!isTokenValid(token)) {
        logout();
      }
      else
      {
        navigate('/aichat/usecase')
      }
    }, []);

    function isTokenValid(token) {
      if (!token) {
        return false;
      }
    
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          return false;
        }
        return true;
      } catch (error) {
        return false;
      }
    }

    function logout() {
      localStorage.removeItem("token");
      navigate("/login");
    }


  function handleChange(e){

    const {name, value} = e.target;

    Setuser({
      ...user,
      [name]: value
    })
  }

  function isEmailValid(email) {
    // A simple regular expression to check for a valid email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
   

    function Click(e)  {
      e.preventDefault();

      // setError('')
      setError(null);
      setEmail(null)
      setPassword(null)
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

      const {email, password} = user
  
      axios.post("http://localhost:9000/login", {email, password},{
        headers:{
          'Accept':'application/json'
        }
      })
      // .then(response => response.json())
      .then((response) => {
        // Check the HTTP status code to determine if the request was successful
        if (response.status === 200) {
          const localStorages =  response.data.token;
          localStorage.setItem("token", localStorages);
          navigate('/aichat/usecase')
        }
        }).catch((error) => {
          if (error.response.status === 401) {
            showFail('Email or Password is not correct');
            // Display an error message to the user and prompt them to log in again
          }
        });
  }


  function Forgetbtn(e)  {
    e.preventDefault();
    navigate('/register/forgetEmail')
  }


  return (
    <div id="all" className="text-xl">

          {isAlert && (
            <div className="alertFail">
              {alertFail}
            </div>
          )}

              <div id='login_logo'>
                <img src={Logo} alt="logo" />
              </div>  

    <div style={{ fontFamily: 'Roboto', display: 'flex', flexDirection: 'column' }}>
      <span style={{fontSize:'40px', fontWeight:'500', paddingBottom:'0.5ch'}}>
        Welcome Back!
      </span>

      <span style={{paddingBottom:'2ch'}}>
        Sign in to your account!
      </span>
    </div>

        <div id="container1">
           
           {error && <p style={{textAlign:'justify', fontSize:'15px'}} className="text-red-900 font-normal">{error}</p>}
          
        <div id="Login_Label">
        <label id="Lables">Email</label>
        <input id="input1" onChange={handleChange} name="email" value={user.email} type="text" placeholder=""></input>
        </div>
        {Email && <p style={{textAlign:'justify', fontSize:'15px'}} className="text-red-900 font-normal">{Email}</p>}


        <div id="Login_Label">
        <label id="Lables">Password</label>
        <input id="input1" onChange={handleChange} name="password" value={user.password} type="text" placeholder=""></input>
        </div>
        {Password && <p style={{textAlign:'justify', fontSize:'15px'}} className="text-red-900 font-normal">{Password}</p>}


        <div  style={{textAlign:'justify', padding:'1ch', fontSize:'15px', color:'#6b6b6b'}}>
        <label>
          <input
          style={{marginRight:'0.5ch'}}
            type="checkbox"
          />
          Remember me
        </label>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', padding:'1ch'}}>
        <Link id="Forget_link" onClick={Forgetbtn}>Forgot your password?</Link>
        <button id="Login_btn" onClick={Click}>SIGN IN</button>
        </div>

        </div>
    </div>
  )
}
