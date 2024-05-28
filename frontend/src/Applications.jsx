import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import AppClient from "./AppClient";

const Home = () => {
  return <h1>Welcome to the Home Page</h1>;
};

const Applications = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/app">App</Link>
            </li>
            <li>
              <Link to="/app/client">App Client</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/*" element={<AppRoutes />} />
        </Routes>
      </div>
    </Router>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/client" element={<AppClient />} />
    </Routes>
  );
};

export default Applications;
