import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../LoginComponents/CSSFolder/Verify.css';


export default function VerifyPage() {

    const [code, setCode] = useState('');
    //Email Send alert
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);  
    //Email verification Fail
    const [alertFail, setAlertFail] = useState('');
    const [isAlert, setIsAlert] = useState(false);  
    const navigate = useNavigate();

    const { token } = useParams();


      //Email Send alert
    const showAlert = (message, duration = 3000) => {
      setAlertMessage(message);
      setIsAlertVisible(true);
  
      // Hide the alert after the specified duration (default: 2000 milliseconds)
      setTimeout(() => {
        setIsAlertVisible(false);
      }, duration);
    };

    useEffect(() => {
        if (token) {
          setCode(token);
        }
      }, [token]);


      //Email verification Fail
      const showFail = (message, duration = 3000) => {
        setAlertFail(message);
        setIsAlert(true);
    
        // Hide the alert after the specified duration (default: 2000 milliseconds)
        setTimeout(() => {
          setIsAlert(false);
        }, duration);
      };    
    

    const handleVerification = (e) => {
        
        e.preventDefault();
        console.log(code);
        axios.post("http://localhost:9000/verify", { code: code }, {
            method:"POST",
            headers:{
              'Accept':'application/json'
            }
          }).then
          ((res) => {

            if(res.data.message === 'True')
            {
              const local_storage = res.data.token;
              localStorage.setItem("token", local_storage);
              navigate('/aichat/usecase')
              // console.log(local_storage)
            }

            if(res.data.message === 'False')
            {
              showFail('Check Email for Verification use Code in Email.');
            }
          })
    }


    const handleResend = (e) => {
        
      e.preventDefault();
      console.log(code);
      axios.post("http://localhost:9000/resendEmail", { code: code }, {
          method:"POST",
          headers:{
            'Accept':'application/json'
          }
        }).then((res) => {
          // Check if the response from the backend indicates that the email was sent successfully.
          if (res.data.message === 'True') {
            // You can notify the user using an alert, a toast, or any notification mechanism you prefer.
            showAlert('Email has been sent successfully.');
          }
        })
        .catch((error) => {
          console.error("Error while sending email:", error);
          // Handle the error if something goes wrong during the request.
          // You can also notify the user about the error here.
        });
    };



    return(
        <div style={{backgroundColor:'#F1EFEF', height:'100vh'}}>
           
           {isAlertVisible && (
            <div className="alert">
              {alertMessage}
            </div>
          )}

          {isAlert && (
            <div className="alertFail">
              {alertFail}
            </div>
          )}
          
            <div style={{paddingTop:'17ch'}}>
    <div style={{width:'50%', marginLeft:'auto', marginRight:'auto' ,textAlign:'center', fontFamily: 'Roboto'}}>
        <div>
        <span style={{textAlign:'center', fontSize:'30px', fontWeight:"550"}}>Email Verification</span>
        </div>
        <div>
        <span>Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</span>
        </div>
    </div>

    <div style={{backgroundColor:'#111827', width:'40%',marginLeft:'auto', marginRight:'auto', marginTop:'2ch', paddingTop:'2ch', paddingBottom:'2ch', borderRadius:'1ch'}}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{width:'90%'}}>
                <span style={{color:'white', fontSize:'2ch'}}>Verification Code</span>
                <input
                style={{width:'100%', padding:'0.7ch', borderRadius:'0.5ch'}}
                type="text"
                  value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Check Email"
                />  
            </div>
        </div>

        <div style={{display:'flex', padding:'2ch', justifyContent:'space-between'}}>
            <button style={{color:'#111827', backgroundColor:'#f55d35', width: 'fit-content', padding:'1ch', paddingLeft:'1.2ch', paddingRight:'1.2ch' ,borderRadius:'1ch'}} value={code} onClick={handleVerification}>Verify Email</button>
            <button style={{color:'#111827', backgroundColor:'#f55d35', width: 'fit-content', padding:'1ch', paddingLeft:'1ch', paddingRight:'1ch' ,borderRadius:'1ch'}} onClick={handleResend}>Resend Verification Email</button>
        </div>
    </div>

</div>
    </div>

    )
}
