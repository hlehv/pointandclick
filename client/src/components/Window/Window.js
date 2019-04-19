import React from "react";
import "./Window.css";
import BrowserWindow from "./BrowserWindow/BrowserWindow.js"
import FileViewer from "./FileViewer/FileViewer.js"

class Window extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'open',
      contents: 'browser',
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
          {/*<FileViewer/>*/}
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
        <i class="fas fa-window-close close-button" onClick={() => this.handleClick()}></i>
      </div>
    );
  }

}

export default Window;
