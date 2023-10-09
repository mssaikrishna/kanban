import React, { useState } from "react";
import "./login.css";
import { mockLogin } from "../authUtils";
import { useNavigate } from "react-router-dom";
import { storeProjectsAndIssues } from "../storageUtils";
import projectsData from "../projectData";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Use a regular expression for email validation
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleLogin = () => {

    if (!isEmailValid(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!email || !password) {
      alert("Please fill out the fields")
      return;
    }
    const token = mockLogin(email, password);

    // Store the mock token in localStorage
    localStorage.setItem("jwtToken", token);
    storeProjectsAndIssues(projectsData);
    navigate("/dashboard");
  };
  return (
    <div>
        <>
          <div className="container">
            <form action="#">
              <div className="title">Login</div>
              <div className="input-box underline">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <div className="underline"></div>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <div className="underline"></div>
              </div>
              <div className="input-box button">
                <input
                  type="submit"
                  name=""
                  onClick={handleLogin}
                  value="Login"
                />
              </div>
            </form>
          </div>
        </>
    </div>
  );
}
