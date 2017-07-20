/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SendButton extends Component {

  render() {
    return (
      <div>
        <div className="chat-input">
          <a className="scale-hover" href="#"><i className="ion-ios-chatboxes-outline"></i></a>
          <input type="text" name="pesan" placeholder="tulis sesuatu disini..." />
          <a className="scale-hover" href="#">Kirim</a>
        </div>
      </div>
    );
  }
}
