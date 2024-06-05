import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Member/Logins";
import Register from './Member/Register';
import Navbar from './Member/Navbar';
import Div2 from './Member/Div';
import Aichatpage from './LoginComponents/Aichatpage';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/" element={<Div2 />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/aichat/prediction" element={<Aichatpage />} /> //Done
      </Routes>
    </Router>
  );
}

export default App;