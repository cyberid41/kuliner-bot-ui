/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  ButtonChoiceCard,
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
      }
    }
  }

  render() {
    const { template } = this.state;
    return (
      <div>
        <Header />
        <div className="header-menu-background header-menu-background-dark"></div>
        <div id="page-content" className="page-content header-clear bg bg-cover">
          <div id="page-content-scroll">
            <div className="mobileui-messages content no-material">
              <TextCard position="left" message={"Selamat datang, ada yang bisa Siwai bantu?"} />
              <ButtonChoiceCard template={template} />
              <CarouselCard />
              <TextCard position="right" message={"saya mau pesan bakso beranak 2"} />
              <TextCard position="left" message={"silahkan, biar siwai bantu untuk pesanin"} />
              <TextCard position="right" message={"sama minumnya esteh 2 juga"} />
            </div>
          </div>
          <SendButton />
        </div>
      </div>
    );
  }
}
