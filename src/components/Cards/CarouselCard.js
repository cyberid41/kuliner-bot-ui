/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CarouselCard extends Component {

  render() {
    return (
      <div>
        <div className="clear"></div>
        <div className="category-slider">
          <div className="swiper-wrapper">
            <a className="swiper-slide" href="#">
              <img className="responsive-image" src="/images/pictures/index1.jpg" alt="img" />
              <em>Ayam Bumbu Sedap</em>
              <strong style={{ color: "#FFF" }}>IDR25000</strong>
            </a>
            <a className="swiper-slide" href="#">
              <img className="responsive-image" src="/images/pictures/index2.jpg" alt="img" />
              <em>Soto Daging</em>
              <strong style={{ color: "#FFF" }}>IDR35000</strong>
            </a>
            <a className="swiper-slide" href="#">
              <img className="responsive-image" src="/images/pictures/index3.jpg" alt="img" />
              <em>Tahu Tek Sedap</em>
              <strong style={{ color: "#FFF" }}>IDR15000</strong>
            </a>
            <a className="swiper-slide" href="#">
              <img className="responsive-image" src="/images/pictures/index4.jpg" alt="img" />
              <em>Bakso Beranak</em>
              <strong style={{ color: "#FFF" }}>IDR35000</strong>
            </a>
            <a className="swiper-slide" href="#">
              <img className="responsive-image" src="/images/pictures/index5.jpg" alt="img" />
              <em>Rendang Sedap</em>
              <strong style={{ color: "#FFF" }}>IDR45000</strong>
            </a>
            <a className="swiper-slide" href="#">
              <img className="responsive-image" src="/images/pictures/index6.jpg" alt="img" />
              <em>Pecel Istimewa</em>
              <strong style={{ color: "#FFF" }}>IDR35000</strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
