import React from 'react'
import image from "./../../Assets/Images/bg-register.png";
import  './../../Assets/Css/Signup.css'
import Navtop from "../Nav/Navtop";
import {Link} from "react-router-dom";

const Signup: React.FC = () => {
    return (
        <div className="template-login">
<Navtop/>
      <div className="container mt-3">
        <div className="d-flex justify-content-center mt-4" style={{ margin: 'auto' }}>
          <div className="form-box" style={{ borderRadius: '20px'}}>
            <div className="row">
              
              <div className="col-6 all_width">
                <div className="mt-4">
                  <div className="d-flex justify-content-center">
                    <div className="h5 text-dark">Sign up </div>
                  </div>
                  <form method="POST" action="{{ route('register') }}">
                  <div className="d-flex justify-content-center mt-3">
                                    <label className="pure-material-textfield-standard mx-3">
                                        <input id="name" type="text" name="name"  required  />
                                        <span>First Name</span>
                                    </label>
                                   
                                </div>
                                

                                <div className="d-flex justify-content-center mt-3">
                                    <label className="pure-material-textfield-standard mx-3">
                                        <input id="name" type="text" name="name"  required  />
                                        <span>Last Name</span>
                                    </label>
                                   
                                </div>

                                <div className="d-flex justify-content-center mt-3">
                                    <label className="pure-material-textfield-standard mx-3">
                                        <input id="name" type="text" name="name"  required  />
                                        <span>Email</span>
                                    </label>
                                   
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <label className="pure-material-textfield-standard mx-3">
                                        <input id="name" type="text" name="name"  required  />
                                        <span>Phone Number</span>
                                    </label>
                                   
                                </div>


                                <div className="d-flex justify-content-center mt-3">
                                    <label className="pure-material-textfield-standard mx-3">
                                        <input id="name" type="text" name="name"  required  />
                                        <span>Password</span>
                                    </label>
                                   
                                </div>
                                <div className="d-flex justify-content-center mt-4 pt-2 ">

<button className="btn btn-primary btn1 text-white">
  Sign up
</button>
</div>
<div className="d-flex justify-content-center mt-3 ms-1 mb-4">
           have you an account?<Link to="/" className="signuplink ms-1">Log in</Link>          </div>
                  </form>
                </div>
              </div>
              <div className="col-6 little_screen_inscription">
                <img src={image} className="w-100" alt="Image" style={{borderBottomRightRadius: '20px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

export default Signup

