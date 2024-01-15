import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/authContext";

export const Navbar = (postID) => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout successful");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed. Please try again.");
    }
  };
  return (
    <DIV>
      <div>
        <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsiPP2kHG0g3B9JKnK0Xvfp1aHZ4f0I6X7w&usqp=CAU"
           width="60px"
           alt="logo"
           style={{ display: "block",borderRadius:"40px"  }}
        />
      </div>
      <a href="/"><h2>My_Post_App</h2></a>
      {isLoggedIn ? (
        <>
          <Link to={"/"}>Posts</Link>
          <Link to={"/add"}>Create Post</Link>
          <Link to={`/update/${postID}`}>Update</Link>

        </>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Sign Up</Link>
        </>
      )}
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer />
    </DIV>
  );
};

const DIV = styled.div`
 background-color: #d9e9e8;
 border-color: rgb(92, 72, 89);
 color: rgb(92, 72, 89);
padding: 0.5rem 1rem;
margin: 20px;
justify-content :space-around;
  display: flex;
  gap: 20px;
  align-items:center;
  cursor: pointer;
  box-shadow: rgba(92, 72, 89, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  a {
    color: rgb(92, 72, 89);
  text-decoration: none;
}
button {
    background-color:#5c4859;
    color:#e2e9e8;
    width: 150px;
    height: 40px;
    padding: 5px;
    font-size: large;
    border-color: #bacac9;
    border-radius: 10px;
  }
`;

