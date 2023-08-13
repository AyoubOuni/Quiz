import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter instead of Routes

import Login from './../Components/Login/Login';
import Signup from './../Components/Signup/Signup';
import Checkemail from './../Components/ForgetPassword/Checkemail';
import Checkkey from './../Components/ForgetPassword/Checkkey';
import Setnewpassword from './../Components/ForgetPassword/Setnewpassword';

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Checkemail />} />
          <Route path="/checkkey" element={<Checkkey />} />
          <Route path="/setnewpassword/:id" element={<Setnewpassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
