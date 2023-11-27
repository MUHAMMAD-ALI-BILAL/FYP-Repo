import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Member/Logins";
import Register from './Member/Register';
import Verify from '../src/Member/VerifyPage';
import ForgotMail from '../src/Member/ForgotMail';
import ForgetVerify from '../src/Member/Forgetverify';
import ResetPassword from '../src/Member/NewPassword';
import Newpassword from '../src/Member/NewPassword';
import Navbar from './Member/Navbar';
import Div2 from './Member/Div';
import Usecases from './LoginComponents/Usecases';
import Aichatpage from './LoginComponents/Aichatpage';
import Aichatpage2 from './LoginComponents/Aichatpage2';
import Aichatpage3 from './LoginComponents/Aichatpage3';
import Aichatpage4 from './LoginComponents/Aichatpage4';
import Aichatpage5 from './LoginComponents/Aichatpage5';
import Aichatpage6 from './LoginComponents/Aichatpage6';
import Aichatpage7 from './LoginComponents/Aichatpage7';
import Aichatpage8 from './LoginComponents/Aichatpage8';
import Aichatpage9 from './LoginComponents/Aichatpage9';
import Aichatpage10 from './LoginComponents/Aichatpage10';
import Aichatpage11 from './LoginComponents/Aichatpage11';
import Aichatpage12 from './LoginComponents/Aichatpage12';


function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Navbar/>}/> 
          <Route exact path="/" element={<Div2/>}/> 
          <Route exact path="/login" element={<Login/>}/> 
          <Route exact path="/register" element={<Register/>}/> 
          {/* <Route exact path="/verify" element={<Verify/>}/>  */}
          <Route path="/verify/:token" element={<Verify />} />
          {/* Password Frogot pages 1-Email check 2- Code Verify */}
          <Route path="/user/forgotpassword/:token" element={<ForgotMail />} />
          <Route exact path="/register/forgetEmail" element={<ForgetVerify/>}/> 
            {/* Reset Password Page */}
          <Route exact path="/user/login/resetpassword" element={<Newpassword/>}/> 
          <Route exact path="/aichat/usecase" element={<Usecases/>}/> 

          <Route exact path="/aichat/blogs" element={<Aichatpage/>}/> //Done
          <Route exact path="/aichat/coldemail" element={<Aichatpage2/>}/> //Done
          <Route exact path="/aichat/tweet" element={<Aichatpage3/>}/> //Done
          <Route exact path="/aichat/coverletter" element={<Aichatpage4/>}/> //Done
          <Route exact path="/aichat/instagram-captions" element={<Aichatpage5/>}/> //Done
          <Route exact path="/aichat/youtube-title" element={<Aichatpage6/>}/> //Done
          <Route exact path="/aichat/youtube-description" element={<Aichatpage7/>}/> //Done
          <Route exact path="/aichat/youtube-ideas" element={<Aichatpage8/>}/> 
          <Route exact path="/aichat/amazon-product-description" element={<Aichatpage9/>}/> //Done 
          <Route exact path="/aichat/amazon-product-title" element={<Aichatpage10/>}/> //Done
          <Route exact path="/aichat/product-description" element={<Aichatpage11/>}/> //Done
          <Route exact path="/aichat/email" element={<Aichatpage12/>}/> //Done
        </Routes>
    </Router>
  );
}

export default App;