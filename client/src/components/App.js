import React, { Component, PropTypes } from 'react';

// NOTE: This is a class-based component because the current version of hot reloading won't hot
// reload a stateless component at the top-level.
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
