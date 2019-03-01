import React from "react";
import "./Window.css";
import NewsSite from "./Websites/NewsSite.js"
import FBIPage from "./Websites/FBIPage.js"
import BrowserWindow from "./BrowserWindow/BrowserWindow.js"


class Window extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'open',
    }
    this.name = "GOOGLE CHROME";
  }

  render() {
    return (
      <div class="Window_container">
        {this.renderWindow()}
      </div>
    );
  }

  handleClick = () => {
    if (this.state.status === 'open'){
      this.setState({
        status: 'closed'
      })
    } 
    else {
      this.setState({
        status: 'open'
      })
    }
  }

  renderWindow() {
    if (this.state.status ==='open') {
      return (
        <div class="Window">
          {this.renderTopBar()}
          <BrowserWindow />
        </div>
      );
    }
    else {
      return (
        <div class="minimized-window" onClick={() => this.handleClick()}>
          {this.name}
        </div>
      );
    }
  }

  renderTopBar() {
    return (
      <div class="top-bar">
        {this.name}
        <button class="exit-button" onClick={() => this.handleClick()}>X</button>
        <button class="exit-button">+</button>
        <button class="exit-button">-</button>
      </div>
    );
  }

}

export default Window;