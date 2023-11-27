import {React} from "react";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import {GoLogoGithub} from 'react-icons/go';
import { useState, useEffect } from 'react';
import '../LoginComponents/CSSFolder/Login.css';
export default function NewPassword() {
 
  const [error, setError] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Confirm, setConfirm] = useState(null);
    //Email verification Fail
    const [alertFail, setAlertFail] = useState('');
    const [isAlert, setIsAlert] = useState(false);  

  // const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const [user, Setuser] = useState({
    email: "",
    password: "",
    confirm: ""
  })


  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //     if (!isTokenValid(token)) {
  //       logout();
  //     }
  //     else
  //     {
  //       navigate('/aichat/blogs')
  //     }
  //   }, []);

  //   function isTokenValid(token) {
  //     if (!token) {
  //       return false;
  //     }
    
  //     try {
  //       const decoded = jwtDecode(token);
  //       if (decoded.exp * 1000 < Date.now()) {
  //         return false;
  //       }
  //       return true;
  //     } catch (error) {
  //       return false;
  //     }
  //   }

  //   function logout() {
  //     localStorage.removeItem("token");
  //     navigate("/login");
  //   }


  const showFail = (message, duration = 3000) => {
    setAlertFail(message);
    setIsAlert(true);

    // Hide the alert after the specified duration (default: 2000 milliseconds)
    setTimeout(() => {
      setIsAlert(false);
    }, duration);
  };    


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
      console.log(user.email)
      console.log(user.password)

      // setError('')
      setError(null);
      setEmail(null);
      setPassword(null);
      setConfirm(null);

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
      if (user.confirm !== user.password) {
        setConfirm('Passwords do not match.');
        return;
      }

      const {email, password} = user
      console.log(user.email)
      console.log(user.password)
      console.log(user)
  
      axios.post("http://localhost:9000/newpassword", {email, password},{
        headers:{
          'Accept':'application/json'
        }
      })
      // .then(response => response.json())
      .then
          ((res) => {

            if(res.data.message === 'True')
            {
              // const local_storage = res.data.token;
              // localStorage.setItem("token", local_storage);
              // console.log(local_storage)
            }

            if(res.data.message === 'False')
            {
              showFail('Email is not Registered');
            }
          })
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

      <span className='flex justify-center mx-auto text-black text-8xl'>
        <GoLogoGithub/>
      </span>

    <div style={{ fontFamily: 'Roboto', display: 'flex', flexDirection: 'column' }}>
      <span style={{fontSize:'40px', fontWeight:'500', paddingBottom:'0.5ch'}}>
        Reset Password
      </span>

      <span style={{paddingBottom:'2ch'}}>
        Create new login password
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


        <div id="Login_Label">
        <label id="Lables">Confirm Password</label>
        <input id="input1" onChange={handleChange} name="confirm" value={user.confirm} type="text" placeholder=""></input>
        </div>
        {Confirm && <p style={{textAlign:'justify', fontSize:'15px'}} className="text-red-900 font-normal">{Confirm}</p>}


        <div  style={{textAlign:'justify', padding:'1ch', fontSize:'15px', color:'#6b6b6b'}}>
        <label>
          <input
          style={{marginRight:'0.5ch'}}
            type="checkbox"
          />
          Remember me
        </label>
        </div>

        <div style={{display:'flex', justifyContent:'center', padding:'1ch', marginLeft:'auto', marginRight:'auto', width:'50%'}}>
        {/* <Link id="Forget_link" onClick={Forgetbtn}>Forgot your password?</Link> */}
        <button style={{width:'100%'}} id="Login_btn" onClick={Click}>Reset Password</button>
        </div>

        </div>
    </div>
  )
}
