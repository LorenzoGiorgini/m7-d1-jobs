import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark">
        <Link to="/">
            <Navbar.Brand>
            <img
                width="auto"
                height="auto"
                className="d-inline-block align-top"
            />
            </Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
}
