import React from "react";
import "./logout.css";
import projectsData from "../projectData";

export default function LogOut() {

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem(projectsData);
    window.location.replace("/");
  };
  return (
    <>
      <div className="fnt">
      <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
