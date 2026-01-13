import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="navbar container py-3 align-items-start">
      <a href="" className="navbar-brand text-light">
        Stock Prediction Portal
      </a>
      <div>
        <Button class="btn-outline-info">Login</Button>
        &nbsp;
        <Button class="btn-info">Register</Button>
      </div>
    </nav>
  );
};

export default Header;
