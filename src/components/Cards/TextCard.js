/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TextCard extends Component {
  static propTypes = {
    position: PropTypes.string,
    message: PropTypes.string,
  }

  render() {
    return (
      <div>
        <p className={`speach-${this.props.position} animated fadeIn delay-100`}>{this.props.message}</p>
      </div>
    );
  }
}
