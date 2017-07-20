/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class CarouselCard extends Component {
  static propTypes = {
    template: PropTypes.string,
  }
  render() {
    const { template } = this.props;
    console.log('template =>', template);
    return (
      <div>
        <div className="clear"></div>
        <div className="category-slider">
          <div className="swiper-wrapper">
            {template && template.items.map((item, key) =>
              <a href="#" className="button button-round button-light">{item.text}</a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
