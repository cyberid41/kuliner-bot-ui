/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.object,
  }
  render() {
    return (
      <div>
        <div className="header header-dark">
          <center>
            <h1 style={{ color: '#fff' }}>{this.props.title}</h1>
          </center>
        </div>
      </div>
    );
  }
}
