import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Button = ({ styleButton, ...props }) => {
  return (
    <div>
      <div {...props} className={styleButton}>
        Hello
      </div>
    </div>
  );
};

Button.propTypes = {};

export default Button;
