import React, { PropTypes } from 'react';
import { Button, ErrorCard, Details } from './';

const Welcome = ({ ...props }) => (
  <div>
    <h1>Welcome!</h1>
    {props.error && <ErrorCard>{props.error}</ErrorCard>}
    <div className="welcome">
      <div>
        <p><b>Username:</b> {props.username}</p>
        <p><b>ID:</b> {props.id}</p>
        {props.nodeVersion && <Details
          nodeVersion={props.nodeVersion}
          appPath={props.appPath}
          dateAndTime={props.dateAndTime}
        />}
      </div>
    </div>
    <Button clickHandler={props.logout}>Logout</Button>
  </div>
);

Welcome.propTypes = {
  error: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
  nodeVersion: PropTypes.string,
  appPath: PropTypes.string,
  dateAndTime: PropTypes.string,
  logout: PropTypes.func,
};

export default Welcome;
