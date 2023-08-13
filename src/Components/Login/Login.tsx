import React, { useState } from "react";
import { Link} from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import  './../../Assets/Css/Login.css'
import image from "./../../Assets/Images/bg-login.jpg";
import Navtop from "../Nav/Navtop";
function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="template-login">
     <Navtop/>

      <div className="item2 mt-3">
      <div className="d-flex justify-content-center " style={{ margin: 'auto' }}>
        <div className="form-box mx-3 " style={{ borderRadius: '20px'}}>
          <div className="row w-100">
            <div className="col-5 little_screen_inscription">
              <img src={image} className='h-100 radius2' width={314}  alt="Image" />
            </div>
            <div className="col-7 all_width ">


            <div
  className=" mt-3 pt-1 h3 ms-1 text-dark  d-flex justify-content-center"
>
  Welcome back !
</div>

              <div className="mt-4">
                
 <div className="h5 text-secondary d-flex justify-content-center mt-1 ">
          Login your account        </div>

          <div className="d-flex justify-content-center mt-3 ms-4">
                                    <label className="pure-material-textfield-standard mx-3">
                                        <input id="name" type="text" name="name"  required  />
                                        <span>E-mail</span>
                                    </label>
                                   
                                </div>
          <div
            className="d-flex justify-content-end show_hide me-5 position-relative"          >
            {showPassword ? (
              <span
                onClick={togglePasswordVisibility}
                role="button"
                className="text-muted"
              >
                <IoIosEyeOff
                  size={16}
                  className="me-1 position-relative"
                  style={{ bottom: "1.6px",cursor:'pointer' }}
                />
                Hide
              </span>
            ) : (
              <span
                role="button"
                className="text-muted"
                onClick={togglePasswordVisibility}
              >
                <IoIosEye
                  size={16}
                  className="me-1 position-relative"
                  style={{ bottom: "1.6px",cursor:'pointer' }}
                />
                Show
              </span>
            )}
          </div>

          <div className="d-flex justify-content-center mt-4 ms-4">
                                    <label className="pure-material-textfield-standard mx-3">
                                        <input    type={showPassword ? "text" : "password"}
              id="password" name="password"  required  />
                                        <span>Password</span>
                                    </label>
                                   
                                </div>
          
          <div className="d-flex justify-content-end me-4 position-left mb-3 mt-4 position-relative" 
          style={{bottom:'5px',right: '14px'}}>
                <a href="/forgetpassword" className="text-dark" style={{textDecoration:'none'}}>Forget your password?</a>
            </div>
          <div className="d-flex justify-content-center mt-3 ms-1">

          <button className="btn btn-primary btn1 text-white">
            Log in
          </button>
          </div>
          <div className="d-flex justify-content-center mt-1 pt-1 ms-1">
            <div className="h6 text-danger border-bottom border-dark w-50 ms-3"></div>
            <span
              className="mt-2 ms-3 position-relative h6"
              style={{ top: "7px" }}
            >
              OR
            </span>
            <div className="h6 me-4 pe-1 text-danger border-bottom border-dark w-50 ms-3"></div>
          </div>
          <div className="d-flex justify-content-center mt-3 ms-1 mb-4">
            <button className="btn2 text-dark google text-nowrap px-2"><FcGoogle size={23} className="position-relative" style={{bottom: '1.5px',right: '4px'}}/>Login with Google account</button>
          </div>
          <div className="d-flex justify-content-center mt-3 ms-1 mb-4">
          Don't have an account?<Link to="/signup" className="signuplink ms-1">Sign up</Link>          </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>





      
      </div>
    </div>
  );
}

export default Login;
