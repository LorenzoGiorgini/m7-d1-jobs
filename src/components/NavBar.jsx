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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png"
                width="auto"
                height="40"
                className="d-inline-block align-top"
            />
            </Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
}
