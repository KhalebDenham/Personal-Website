import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar.js";
import Button from "./components/Button.js";
import CenterCard from "./components/CenterCard.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <Container className="page-Container">
      <Router>
        <Navbar></Navbar>
        <CenterCard className="CenterCard"></CenterCard>
      </Router>
    </Container>
  );
}

export default App;
