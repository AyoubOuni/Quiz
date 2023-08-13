import React from 'react'
import quiz from "./../../Assets/Images/quiz.png";
import { Link} from "react-router-dom";
import  './../../Assets/Css/Signup.css'

function Navtop() {
  return (
    <div>
       <div className="flex ms-2">
        <div className="flex1 ms-3">

          <Link style={{ textDecoration: "none", alignSelf: "center" }} to="/"  className="flex1">      
            <img width={50} height={50} src={quiz} className="logo_size" style={{position:'relative',top:'3px'}} ></img>

            <h2 className="text-dark ms-1 mt-2">

              <b>Quiz App</b>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navtop
