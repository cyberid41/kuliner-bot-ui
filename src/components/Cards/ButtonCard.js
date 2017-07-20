/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ProductCard extends Component {
  static propTypes = {
    products: PropTypes.object,
  }
  render() {
    const { products } = this.props;
    return (
      <div>
        <div className="store-cards">
          {products.results && products.results.map((product, key) =>
            <div href="#" className="store-card-item" key={key}>
              <Link to={`/u/${product.user.username}/${product.slug}`}>
                {!product.lead_media.urls[0] &&
                  <img
                    className="responsive-image preload-image"
                    src="/no_image.jpg"
                    alt={product.title}
                    onError={(event) => {
                      event.target.src = "/no_image.jpg";
                    }} />
                }
                {product.lead_media.urls[0] &&
                  <img
                    className="responsive-image preload-image"
                    src={product.lead_media.urls[0]}
                    alt={product.title}
                    onError={(event) => {
                      event.target.src = "/no_image.jpg";
                    }} />
                }
              </Link>
              <h3>{product.title}</h3>
              <Link href="#" className="store-card-share show-share-bottom"><i className="ion-android-share"></i></Link>
              <Link href="#" className="store-card-cart"><i className="ion-dollars"></i>{product.spesifications.price}</Link>
              <Link href="#" className="store-card-heart"><i className="ion-heart color-red-dark"></i></Link>
            </div>
          )}
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
