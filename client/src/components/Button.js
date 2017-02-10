import React, { PropTypes } from 'react';

const Button = ({ clickHandler, children }) => (
  <button onClick={clickHandler} className="button">
    {children}
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
