/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class CarouselCard extends Component {
  static propTypes = {
    result: PropTypes.object,
  }
  render() {
    const { result } = this.props;
    console.log('list carousel =>', result);
    return (
      <div>
        <div className="clear"></div>
        <div className="category-slider">
          <div className="swiper-wrapper">
            {result.items && result.items.map((item, key) =>
              <a className="swiper-slide" href="#">
                <img className="responsive-image" src={item.image} alt="img" />
                <em>{item.text}</em>
                <strong style={{ color: "#FFF" }}>{item.price}</strong>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
