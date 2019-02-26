import React from "react";
import "./Window.css";
import NewsSite from "./NewsSite.js"


class Window extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'open',
      site: '',
      bookmarks: ['news', 'fbi database', 'mystery', 'penis']
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
          {this.renderBookmarks()}
          {this.renderContents()}
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

  renderContents(){
    if (this.state.site === 'news'){
      return(
        <NewsSite/>
      )
    }
  }

  renderBookmarks(){
    return(
    <div class = "Bookmarks">
      {this.state.bookmarks.map((bookmark, index) =>
      (
        <button class="bookmark" key={index} onClick={() => this.handleBookmarksClick(index)}>{bookmark}</button>
      ))}
    </div>
    )
  }

  handleBookmarksClick = (index) => {
      this.setState({
        site: this.state.bookmarks[index]
      })
  }
}

export default Window;