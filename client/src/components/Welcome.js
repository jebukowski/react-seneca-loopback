import React, { PropTypes } from 'react';
import { Button, ErrorCard } from './';

const Welcome = ({ error, username, id, logout }) => (
  <div>
    <h1>Welcome!</h1>
    {error && <ErrorCard>{error}</ErrorCard>}
    <div className="welcome">
      <div>
        <p><b>Username:</b> {username}</p>
        <p><b>ID:</b> {id}</p>
      </div>
    </div>
    <Button clickHandler={logout}>Logout</Button>
  </div>
);

Welcome.propTypes = {
  error: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
  logout: PropTypes.func,
};

export default Welcome;
