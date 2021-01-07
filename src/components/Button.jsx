import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  outline: false,
};

export default Button;
