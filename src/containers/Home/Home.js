/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  ButtonCard,
  CarouselCard,
  Header,
  SendButton,
  TextCard,
} from 'components';
import Helmet from 'react-helmet';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Bot UI',
      description: '',
      results: [
        {
          text: "Selamat datang, ada yang bisa %s bantu?",
          type: "text",
          position: "left"
        },
        {
          type: "button",
          items: [
            { item: "button", text: "Oke" },
            { item: "button", text: "Menu" },
            { item: "button", text: "Tidak" },
          ]
        },
        {
          type: "carousel",
          items: [
            { text: "Bakso Bakar", price: "IDR45000", image: "/images/pictures/index1.jpg" },
            { text: "Soto Ayam", price: "IDR40000", image: "/images/pictures/index2.jpg" },
            { text: "Lalapan", price: "IDR35000", image: "/images/pictures/index3.jpg" },
            { text: "Rendang", price: "IDR15000", image: "/images/pictures/index4.jpg" },
            { text: "Tahu Tek", price: "IDR10000", image: "/images/pictures/index5.jpg" },
          ]
        },
        {
          text: "Saya pesan tahu tek 2",
          type: "text",
          position: "right"
        },
        {
          text: "oke, apa ada lagi yang mau dipesan?",
          type: "text",
          position: "left"
        },
        {
          text: "sama bakso bakar",
          type: "text",
          position: "right"
        },
        {
          text: "Biar %s konfirmasi untuk pesanannya",
          type: "text",
          position: "left"
        },
        {
          type: "carousel",
          status: "booked",
          items: [
            { text: "Bakso Bakar", price: "IDR45000", image: "/images/pictures/index1.jpg" },
            { text: "Tahu Tek", price: "IDR10000", image: "/images/pictures/index5.jpg" },
          ]
        }
      ]
    }
  }

  componentDidMount() {
    const config = process.env.APP_CONFIG;
    this.setState({ title: config.title, description: config.description });
  }

  _renderCard(result) {
    if (result.type === "text") {
      return <TextCard result={result} />
    } else if (result.type === "carousel") {
      return <CarouselCard result={result} />
    } else if (result.type === "button") {
      return <ButtonCard result={result} />
    }
  }

  render() {
    const { results, title, description } = this.state;
    return (
      <div>
        <Header title={title} />
        <Helmet title={title} meta={[{ name: description }]} />
        <div className="header-menu-background header-menu-background-dark"></div>
        <div id="page-content" className="page-content header-clear bg bg-cover">
          <div id="page-content-scroll">
            <div className="mobileui-messages content no-material">
              {results && results.map((result) => {
                return this._renderCard(result)
              })}
            </div>
          </div>
          <SendButton />
        </div>
      </div>
    );
  }
}
