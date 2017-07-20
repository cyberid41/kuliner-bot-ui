/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import config from 'config';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div id="page-transitions">
        <div className="page-preloader page-preloader-dark">
          <div className="spinner"></div>
        </div>
        <Helmet {...config.app.head} />
        <div>
          {children}
        </div>
      </div>
    );
  }
}
