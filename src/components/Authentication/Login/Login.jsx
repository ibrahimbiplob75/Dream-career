/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../../Hook/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const { googleSignIn, emailLogin } = useContext(AuthContext);
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")

  const handleLogin = () => {
      setError(" ");
      if (email,password) {
        emailLogin(email, password).then((res) => console.log(res.user));
      }
      else{
        setError("something went wrong")
      }
  };
  const handleGoogle=()=>{
    googleSignIn().then(res=>{
      if(res.user){
        console.log("Login in")
      }
      
    }).then(console.error())
  }

  return (
    <div>
      <div className="login-container">
        <div>
          <p>{error}</p>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            type="email"
            placeholder="Type Email"
            name="email"
          />
          <input
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            type="password"
            placeholder="Type Password"
            name="password"
          />
          <button onClick={() => handleLogin()} className="Login-btn">
            Login
          </button>
          <div className="login-btns">
            <button onClick={() => handleGoogle()} className="google-btn ">
              Google Login
            </button>
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
  );
};

export default Login;
