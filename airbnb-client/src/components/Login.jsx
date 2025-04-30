import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "./Navbar";

export default function Login() {
  const [form , setForm] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      
     
     
      const res= await api.post("/auth/login",form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
      alert("logged in successfully");
    }catch(err){
     
      console.error("Axios Error:", err); // Log the full error object
      console.error("Error Response:", err.response); // Log the response from the server
      alert(err?.response?.data?.message || "Login failed");

     

    }


  }

  return (
    <>
    <Navbar/>
      <div className="login-container">
        <div className="neumorphic neumorphic-card ">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
              className="neumorphic-input neumorphic "
            />
            <input
            onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              className="neumorphic-input neumorphic"
            />
            <button type="submit" class="neumorphic neumorphic-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
