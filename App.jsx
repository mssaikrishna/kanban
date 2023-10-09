
import Login from "./login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./App.css";
import React from "react";
import Dashboard from "./dashboard/dashboard";
function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
