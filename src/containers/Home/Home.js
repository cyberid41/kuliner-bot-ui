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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: {
        type: "template",
        items: [
          { item: "button", text: "Menu" },
          { item: "button", text: "Terimakasih" },
          { item: "button", text: "Tidak" },
          { item: "button", text: "Oke" }
        ]
      },
      results: [
        {
          text: "Selamat datang, ada yang bisa Siwai bantu?",
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
            { text: "Bakso bakar", price: "IDR45000", image: "/images/pictures/index1.jpg" },
            { text: "Soto Ayam", price: "IDR40000", image: "/images/pictures/index2.jpg" },
            { text: "Lalapan", price: "IDR35000", image: "/images/pictures/index3.jpg" },
          ]
        },
        {
          text: "Selamat datang, ada yang bisa Siwai bantu?",
          type: "text",
          position: "right"
        },
        {
          text: "Selamat datang, ada yang bisa Siwai bantu?",
          type: "text",
          position: "left"
        },
      ]
    }
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
    const { results } = this.state;
    return (
      <div>
        <Header />
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
