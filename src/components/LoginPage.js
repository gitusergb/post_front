import React from "react";
import  { useState } from 'react';
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Login= () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleSubmit = async() => {
    const payload={
     email,password
    }
        console.log(payload)
       //console.log()
       fetch(" https://im-jbnm.onrender.com/users/login",{
        method:'POST',
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
       }).then(res=>res.json()).then(data=>{
        console.log(data)
        login();
        localStorage.setItem("token",data.token);
        navigate("/")
       }).catch((err)=>{console.log(err)
        alert(err)})
      };
  return (
    <DIV>
        <h3>Login</h3>
    <input  data-testid="user-email" 
      type="email"
      name="email"
       placeholder="Email" 
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       required/>
    <input  data-testid="user-password"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required/>
    <button  onClick={handleSubmit} >Login</button>
    </DIV>
  );
};

const DIV = styled.div`
background-color: #d5e8e6;
color:#4d3b4a;
  width: 450px;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 15px;
  align-items: center;
  box-shadow: rgba(92, 72, 89, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
    border-color: #bacac9;
  }
  button {
    background-color:#5c4859;
    color:#e2e9e8;
    width: 150px;
    height: 50px;
    padding: 5px;
    font-size: large;
    border-color: #bacac9;
    border-radius: 10px;
  }
`;