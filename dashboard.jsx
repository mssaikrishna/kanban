import React from "react";
import { projectName } from "../projectData";
import Todo from "../todo/todo";
import Inprogress from "../inprogress/inprogress";
import Completed from "../completed/completed";
import { useProjectContext } from "../ProjectContext";
import LogOut from "../logout/logout";
import "./dashboard.css";

export default function Dashboard() {

  const {
  handleSearch,
  searchTerm,
  setSearchTerm,
  handleClear,
  projects
  } = useProjectContext();
  return (
    <div className="container-fluid">
      <h1 className="glowing-text">Kanban board</h1>
      <div className="row">
        <h3 className="txt-lft mb-4">{projectName}</h3>
        <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by issue name..."
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>
        <Todo projects={projects}></Todo>
        <Inprogress projects={projects}></Inprogress>
        <Completed projects={projects}></Completed>
      </div>
      <div className="log-stl">
        <LogOut />
      </div>
    </div>
  );
}
