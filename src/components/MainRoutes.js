import React from "react";
import { Route, Routes } from "react-router-dom";
import {Login} from "../components/LoginPage";
import {Signup} from "../components/SignupPage";
import{Posts} from"../components/Posts"
import {CreatePost} from "../components/CreatePost";
import {UpdatePost} from "../components/UpdatePost";

export const MainRoutes = () => {
  return (
    <Routes>      
      <Route path="/" element={< Posts/>} />;
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/add" element={< CreatePost/>} />
      <Route path="/update/:postId" element={<UpdatePost/>} />
      <Route path="*" element={<div>Page Not Found</div>} /> 
    </Routes>
  );
};