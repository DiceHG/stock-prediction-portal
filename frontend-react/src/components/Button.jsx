import React from "react";

const Button = (props) => {
  return (
    <>
      <a href="#" className={`btn ${props.class}`}>
        {props.children}
      </a>
    </>
  );
};

export default Button;
