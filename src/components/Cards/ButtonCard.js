/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ButtonCard extends Component {
  static propTypes = {
    result: PropTypes.object,
  }
  render() {
    const { result } = this.props;
    console.log('button =>', result);
    return (
      <div>
        <div className="clear"></div>
        <div className="category-slider">
          <div className="swiper-wrapper">
            {result && result.items.map((item, key) =>
              <a href="#" className="button button-round button-light">{item.text}</a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
