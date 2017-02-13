import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/sessionActions';
import { Welcome } from '../components';

const WelcomePage = ({ ...props }) => (
  <Welcome {...props} />
);

const mapStateToProps = state => ({
  error: state.details.error,
  username: state.session.userInfo.username,
  id: state.session.userInfo.id,
  nodeVersion: state.details.nodeVersion,
  appPath: state.details.appPath,
  dateAndTime: state.details.dateAndTime,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actions.logout()),
});

WelcomePage.propTypes = {
  error: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
  nodeVersion: PropTypes.string,
  appPath: PropTypes.string,
  dateAndTime: PropTypes.string,
  logout: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
