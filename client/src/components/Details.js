import React, { PropTypes } from 'react';

const Details = ({ nodeVersion, appPath, dateAndTime }) => (
  <div>
    <p><b>Node Version:</b> {nodeVersion}</p>
    <p><b>App Path:</b> {appPath}</p>
    <p><b>Date and Time:</b> {dateAndTime}</p>
  </div>
);

Details.propTypes = {
  nodeVersion: PropTypes.string,
  appPath: PropTypes.string,
  dateAndTime: PropTypes.string,
};

export default Details;
