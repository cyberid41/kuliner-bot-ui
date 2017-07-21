/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TextCard extends Component {
  static propTypes = {
    result: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      botName: 'Bot',
    }
  }

  componentDidMount() {
    const config = process.env.APP_CONFIG;
    this.setState({ botName: config.botName });
  }
  render() {
    const { result } = this.props;
    const { botName } = this.state;
    var text = result.text.replace(/%s/gi, botName);
    return (
      <div>
        <p className={`speach-${result.position} animated fadeIn delay-100`}>{text}</p>
      </div>
    );
  }
}
