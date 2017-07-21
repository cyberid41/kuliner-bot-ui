/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TextCard extends Component {
  static propTypes = {
    result: PropTypes.object,
  }

  render() {
    const { result } = this.props;
    return (
      <div>
        <p className={`speach-${result.position} animated fadeIn delay-100`}>{result.text}</p>
      </div>
    );
  }
}
