import React, {useEffect, useState} from "react";
import './register.css';
import axios from 'axios';
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {GoLogoGithub} from 'react-icons/go';
import {BsCheck2Circle} from 'react-icons/bs';
import GoogleLogin from "react-google-login";
import pic from '../Pic/bg.jpg'
import Logo from '../Pic/Logo2.png'
// import { gapi } from "gapi-script";
 // const res = await fetch('http://localhost:9000/google_register',{

export default function Login() {

  const divStyle = {
    backgroundImage: `url(${pic})`, // Use backticks and ${} to insert the image URL
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    flexDirection: 'column', // Stack text vertically
    color: 'white', // Text color
  };


  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Comfirm, setComfirm] = useState(null);


  // const [loginData, setDatalogin] = useState(
  //   localStorage.getItem('loginData')
  //   ? JSON.parse(localStorage.getItem('loginData'))
  //   :
  //   null
  // );

  useEffect(() => {
    gapi.load("client:auth2", () =>{
      gapi.auth2.init({clientId:process.env.REACT_APP_GOOGLE_CLIENT_ID})
    })
  },[])

  const handlefail = (result) =>{
      console.log(result);
  }

 
  // const onSignIn = googleUser => {
  //   setIdToken(googleUser.getAuthResponse().id_token);
  // };

  const hanldelogin = async (googleData) =>{
    
    const id_token = googleData.getAuthResponse().id_token;

   await axios.post("http://localhost:9000/google_register", {
       token : id_token
    },
    {
      credentials: 'include'
    }
  //   {
  //   withCredentials : true,
  //   headers: 
  //     {
  //       'Content-Type': 'application/json'
  //     }
  // })
   )
    .then(res => {
        if(res.data === "success"){
          // navigate('/aichat')
        }
    })
    .catch(error => {
      console.log(error)
    })
  //   // .then(res =>{
  //   //   const data = res.JSON()
  //   //   setDatalogin(data);
  //   //   localStorage.setItem('loginData', JSON.stringify(data));
  //   //   console.log(res)
  //   // })
  //   // const data = await res.json();
  //   // setDatalogin(data);
  //   // localStorage.setItem('loginData', JSON.stringify(data));
  //   // console.log(googleData);
  }


    function Click(e) {
      e.preventDefault();

      setError(null);
      setName(null);
      setEmail(null);
      setPassword(null);
      setComfirm(null);
      if (!user.name || !user.email || !user.password) {
        setError('All fields are required');
        return;
      }
      if (user.name.length < 2) {
        setName('Name is too short. It should be at least 2 characters.');
        return;
      }
      if (user.name.length > 15) {
        setName('Name is too long. It should be 12 characters or less.');
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
      if (user.password != user.confirmPass) {
        setComfirm('Passwords do not match.');
        return;
      }

      const {name, email, password} = user
  
      axios.post("http://localhost:9000/register", user,{
        method:"POST",
        headers:{
          'Accept':'application/json'
        }
      })
      .then((res) => {
        if (res.status === 409) {
          // Handle the 409 error
          setError('Email is already registered. Please use a different email.');
        } else {
          // const local_storage = res.data.token;
          const message = res.data.message;
          // console.log(local_storage);
          console.log(message);
          navigate("/verify/Check-Mail");
        }
      })
      .catch((error) => {
        // Handle other errors (e.g., network issues, server errors)
        console.error("An error occurred:", error);

        // Handle the 409 error specifically
        if (error.response.status === 409) {
          setError('Email is already registered. Please use a different email.');
        }
      });
    }

    function isEmailValid(email) {
      // A simple regular expression to check for a valid email format
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }

    
  
    function handleChange(e){

      const {name, value} = e.target;

      Setuser({
        ...user,
        [name]: value
      })
    }


    const [user, Setuser] = useState({
      name: "",
      email: "",
      password: "",
      confirmPass: ""
    })

    function handlesignIn(){
      navigate('/login')
    }

  return (

    <div className="flex flex-col md:flex-row">
      <div style={{backgroundColor:'white'}} className="md:w-3/5 bg-gray-600 lg:w-3/5 min-h-screen space-y-3">
        <div className="mt-4">

            {/* <span className='flex justify-center mx-auto text-black text-4xl'> */}
              <div id='register_logo'>
                <img src={Logo} alt="logo" />
              </div>            
            {/* </span> */}
            
        </div>
        <div className="mt-4 mx-auto w-11/12 space-y-3 md:w-10/12">
          <div className="space-y-2 text-center">
            <h1 className="font-semibold text-2xl text-black">
              Begin your journy with 2000 Words for free
            </h1>
            <p className="text-stone-700">No Credit required</p>
          </div>
        </div>

        {/* <div>
          <GoogleLogin className="flex mx-auto p-1 text-white justify-center bg-orange-600 rounded-lg space-x-3 w-10/12"
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          // clientId="118621925137-trrk4jli3juc9isjf5g9b4tq8p6p47p0.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={hanldelogin}
          // onSuccess={(response) => {
          //   console.log(response);
          // }}
          onFailure={handlefail}
          cookiePolicy={'single_host_origin'}
          >

          </GoogleLogin>
            <a href="" className="flex mx-auto p-1 text-white justify-center bg-orange-600 rounded-lg space-x-3 w-10/12">
            Continue with Google
            </a>
        </div> */}

        {/* <div>

        </div> */}

        <form className="w-10/12 mx-auto flex-col">

          <div className="flex flex-col">
          {error && <p style={{fontSize:'15px'}} className="text-red-900 font-normal">{error}</p>}
            <label id="Reg_lables" className="text-black">Name</label>
            <input id="Reg_input" onChange={handleChange} name='name' value={user.name} className="p-1 rounded-lg border-2 border-gray-400"></input>
            {Name && <p style={{fontSize:'15px'}} className="text-red-900 font-normal">{Name}</p>}
          </div>

          <div className="flex flex-col mt-4">
            <label id="Reg_lables" className="text-black">Email</label>
            <input id="Reg_input" onChange={handleChange} name='email' value={user.email} className="p-1 rounded-lg border-2 border-gray-400"></input>
            {Email && <p style={{fontSize:'15px'}} className="text-red-900 font-normal">{Email}</p>}
          </div>

          <div className="flex flex-col mt-4">
            <label id="Reg_lables" className="text-black">Password</label>
            <input id="Reg_input" onChange={handleChange} name='password' value={user.password} className="p-1 rounded-lg border-2 border-gray-400"></input>
            {Password && <p style={{textAlign:'justify', fontSize:'15px'}} className="text-red-900 font-normal">{Password}</p>}
          </div>

          <div className="flex flex-col mt-4">
            <label id="Reg_lables" className="text-black">Confirm Password</label>
            <input id="Reg_input" onChange={handleChange} name='confirmPass' value={user.confirmPass} className="p-1 rounded-lg border-2 border-gray-400"></input>
            {Comfirm && <p style={{textAlign:'justify', fontSize:'15px'}} className="text-red-900 font-normal">{Comfirm}</p>}
          </div>

           <label style={{fontSize:'15px', fontWeight:'300', paddingTop:'1ch'}}>
          <input
          style={{marginRight:'0.5ch'}}
            type="checkbox"
          />
          Remember me
          </label>
        {/* </div> */}

        </form>

        <div className="space-y-2">
        <div className="space-y-1">

            <Link onClick={Click} href="" className="flex mx-auto p-1 text-white justify-center bg-orange-600 rounded-lg space-x-3 w-10/12">
            Sign Up
            </Link>
        </div>
        </div>

        <div style={{fontFamily: 'Roboto'}} className="text-center">
          <span style={{color:'#6b7280'}}>Already Registered? </span>
          <span id="SignIn_btn" className="ml-1" onClick={handlesignIn}> Sign In</span>
        </div>

      </div>

      <div className="w-full min-h-full">
        <div style={divStyle}>
          <div style={{width:'80%', textAlign:'center', fontFamily: 'Roboto', fontSize:'30px'}}>
            <span >Join the <span> 100,000+ </span> marketing teams, agencies, and content writers who trust our platform.</span>
        </div>
        </div>

            
      </div>  
    </div>

    // <div id="all">
    //     Register Page
    //     <div id="container">
    //        Form
    //        <br/>
    //     <input className="" id="input" name="name" type="text" onChange={handleChange} value={user.name} placeholder="User name"></input>
    //     <br/>
    //     <input id="input" name="email" type="text" onChange={handleChange} value={user.email} placeholder="Email"></input>
    //     <br/>
    //     <input id="input" name="password" type="text" onChange={handleChange} value={user.password} placeholder="Password"></input>
    //     <br/>
    //     <button onClick={Click}>Login</button>
    //     </div>
    // </div>
  )
}
