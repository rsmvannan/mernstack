import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Authentication from "./Authentication";

const HeaderComponent = () => {
  return (
    <Navbar className="header" bg="dark" variant="dark">
      Banking Management System
    </Navbar>
  );
};

export default HeaderComponent;
