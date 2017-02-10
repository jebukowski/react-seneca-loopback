import React, { PropTypes } from 'react';

const ErrorCard = ({ children }) => (
  <div className="error-card">
    <p>{children}</p>
  </div>
);

ErrorCard.propTypes = {
  children: PropTypes.string,
};

export default ErrorCard;
