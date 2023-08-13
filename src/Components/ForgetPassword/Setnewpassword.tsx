import React from 'react';

import  './../../Assets/Css/setnewpassword.css'
import Navtop from "../Nav/Navtop";
const SetNewPassword: React.FC = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className="template-login">
    <Navtop/>

    <div>
      <div className="d-flex justify-content-center pt-5">
        <div>
          <div className="text-center">
            <div className="text-center title">Set a new password</div>
            <div className="d-flex my-1 mb-2 justify-content-center">
            </div>
            <form >
      
              <div className="form-group">
                <div>
                  <input
                    id="pass1"
                    name="pass1"
                    placeholder="Set new Password"
                    className="form-control"
                    type={showPassword ? "text" : "password"}                    required
                  />
                </div>
                <br />
                <div>
                  <input
                    id="pass2"
                    name="pass2"
                    placeholder="Confirm the new Password"
                    className="form-control"
                    type={showPassword ? "text" : "password"}                    required
                  />
                </div>
              </div>
             
              <div className="pe-3 d-flex justify-content-center mt-3 col-6 little_checkbox">
                <input
                  type="checkbox"
                  onChange={handleShowPassword}
                  className="me-1"
                  style={{ width: '17px' }}
                />
                <label className="text-nowrap" style={{ fontSize: '17px' }}>
                  Show password
                </label>
              </div>
              <br />
              <div className="d-flex justify-content-end mt-3">
                <button type="button" className="btn-20 me-2" >
                  Annuler
                </button>
                <button type="submit" className="btn-21 text-nowrap">
                  Valide
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SetNewPassword;
