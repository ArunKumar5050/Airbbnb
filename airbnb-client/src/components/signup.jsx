import React from "react";
import api from "../api/axios";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import "./signup.css";
import { FaEye } from "react-icons/fa";
export default function Signup() {
  const [form, setForm] = useState({ name: "", username: "",email:"", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
    
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      await api.post("/auth/signup",form);
      console.log("User Created Successfully")
      alert("User Created Successfully")
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      console.log("User Created Successfully")
    }catch(err){
      console.log(err)
      alert("User Creation Failed")
    }
  }

  const myFunction = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  return (
    <div className="signup-container">
      <div className="neumorphic neumorphic-card ">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit} method="post" action="/signup">
          <input
          name="name"
            type="text"
            placeholder="Name"
            className="neumorphic-input neumorphic "
            onChange={handleChange}
            />

          <input
          name="username"
          type="text"
          placeholder="Username"
          className="neumorphic-input neumorphic "
          onChange={handleChange}
          />
          <input
          name="email"
          type="text"
          placeholder="Email"
          className="neumorphic-input neumorphic "
          onChange={handleChange}
          />

          <div className="password">
            <input
            name="password"
            type="password"
            placeholder="Password"
            className="password-input neumorphic-input neumorphic"
            id="myInput"
            onChange={handleChange}
            />
            <span className="icon" onClick={myFunction}>
              <FaEye />
            </span>
          </div>
          <button type="submit" className="neumorphic neumorphic-button">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
