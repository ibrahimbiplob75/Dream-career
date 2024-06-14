/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";

import "../Login/Login.css";
import { AuthContext } from "../../../Hook/AuthProvider";


const Register = () => {
  const { googleSignIn, emailSign } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  

  const handleLogin = () => {
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password)){
      setError(
        "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
      );
    }
    else{
      setError("")
      if(email){
        emailSign(email,password).then(res=>console.log(res.user))
      }
    }
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((res) => {
        if (res.user) {
          console.log(res, "Login in");
        }
      })
      .catch(error=>console.log(error));
  };
  
  return (
    <div>
      <div>
        <div className="login-container">
          <div>
            <p>{error}</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              type="email"
              placeholder="Type Email"
              name="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              type="password"
              placeholder="Type Password"
              name="password"
            />
            <button onClick={()=>handleLogin()} className="Login-btn">Register</button>
            <div onClick={() => handleGoogle()} className="login-btns">
              <button className="google-btn ">Google Login</button>
            </div>
          </div>
          <div className="login-img">
            <img
              src="https://i.ibb.co/JtcDXq5/undraw-Mobile-login-re-9ntv.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
