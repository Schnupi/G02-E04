import React from "react";
import PropTypes from "prop-types";

const Button = ({ styleButton, ...props }) => {
  console.log(styleButton);
  return (
    <div>
      <button {...props} className={styleButton}>
        Hello
      </button>
    </div>
  );
};

Button.propTypes = {};

export default Button;
