import React, { Component } from 'react';
import { Button } from '@mui/material';
import { auth } from '../firebase.js';
import SetUpChatGpt from './SetUpChatGpt.js';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent2: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showComponent2: true });
  }

  render() {
    return (
      <div>
        {this.state.showComponent2 ? (
          <SetUpChatGpt />
        ) : (
          <div className='header'>
            <Button style={{ color: "white", fontSize: "15px" }} onClick={() => auth.signOut()}>サインアウト</Button>
            <h3>{auth.currentUser.displayName}</h3>
            <Button style={{ color: "white", fontSize: "15px" }}>chatGPT設定</Button>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
