import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar.js";
import Button from "./components/Button.js";
import CenterCard from "./components/CenterCard.js";
import HomePage from "./components/HomePage.js";
import MountainPage from "./components/MountainPage.js";
import RiverPage from "./components/RiverPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Container className="page-Container">
      <Navbar></Navbar>
      <Router > 
        <Routes>
          <Route path="Home" element={<HomePage /> }>
          </Route>
          <Route path="/mountain" element={<MountainPage />}></Route>
          <Route path="/river" element={<RiverPage />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
