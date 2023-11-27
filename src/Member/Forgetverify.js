import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../LoginComponents/CSSFolder/Verify.css'


export default function Forgetverify() {

    const navigate = useNavigate();
    //Email Send alert
    const [email, setemail] = useState('');

    //Notification is user not exist
    const [alertFail, setAlertFail] = useState('');
    const [isAlert, setIsAlert] = useState(false);  


     //Email verification Fail
     const showFail = (message, duration = 5000) => {
      setAlertFail(message);
      setIsAlert(true);
  
      // Hide the alert after the specified duration (default: 2000 milliseconds)
      setTimeout(() => {
        setIsAlert(false);
      }, duration);
    };    

    function isEmailValid(email) {
      // A simple regular expression to check for a valid email format
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }

    const handleForogt = (e) => {
        
        e.preventDefault();
        console.log(email);

        if (!email) {
          showFail('Enter your email address!.');
          return;
        }
        if (!isEmailValid(email)) {
          showFail('Enter a valid email address.');
          return;
        }

        axios.post("http://localhost:9000/forgotpassword", { email: email }, {
            method:"POST",
            headers:{
              'Accept':'application/json'
            }
          }).then
          ((res) => {

            if(res.data.message === 'True')
            {
              navigate("/user/forgotpassword/check-mail")
              // const local_storage = res.data.token;
              // localStorage.setItem("token", local_storage);
              // console.log(local_storage)
            }

            if(res.data.message === 'False')
            {
            showFail('Email is not Registered.');
            }
          })
    }



    return(
        <div style={{backgroundColor:'#F1EFEF', height:'100vh'}}>

          {isAlert && (
            <div className="alertFail">
              {alertFail}
            </div>
          )}  
           
          
            <div style={{paddingTop:'17ch'}}>
    <div style={{width:'50%', marginLeft:'auto', marginRight:'auto' ,textAlign:'center', fontFamily: 'Roboto'}}>
        <div>
        <span style={{textAlign:'center', fontSize:'30px', fontWeight:"550"}}>Forgot password</span>
        </div>
        <div>
        <span>Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</span>
        </div>
    </div>

    <div style={{backgroundColor:'#111827', width:'40%',marginLeft:'auto', marginRight:'auto', marginTop:'2ch', paddingTop:'2ch', paddingBottom:'2ch', borderRadius:'1ch'}}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{width:'90%'}}>
                <span style={{color:'white', fontSize:'2ch'}}>Email</span>
                <input
                style={{width:'100%', padding:'0.7ch', borderRadius:'0.5ch'}}
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Check Email"
                />  
            </div>
        </div>

        <div style={{display:'flex', padding:'2ch', width:'50%', marginLeft:'auto', marginRight:'auto'}}>
            <button style={{color:'#111827', backgroundColor:'#f55d35', width: '100%', padding:'1ch', paddingLeft:'1.2ch', paddingRight:'1.2ch' ,borderRadius:'1ch'}}  onClick={handleForogt}>Submit</button>
        </div>
    </div>

</div>
    </div>

    )
}
