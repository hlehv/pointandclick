import React from "react";
import "./WebBrowser.css";
import { Window } from "../../GuiElements";
import { FBIPage, Gmail, NameChange, NewsSite } from "./Websites";

class WebBrowser extends React.Component {
    state = {
        currentPage: ""
    };
    render() {
        return (
            <div className="web-browser">
                <Window title="Web Browser" contents={<FBIPage />} />
            </div>
        );
    }
}
export default WebBrowser;

/*
class BrowserWindow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'open',
      site: 'news',
      bookmarks: ['news', 'fbi', 'email', 'name change',]
    }
    this.name = "GOOGLE CHROME";
  }

  render() {
    return (
      <div class="BrowserWindow_container">
        {this.renderBrowserWindow()}
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

  renderBrowserWindow() {
      return (
        <div class="BrowserWindow">
          {this.renderBookmarks()}
          {this.renderContents()}
        </div>
      );
  }


  renderContents(){ //change this to be from json
    if (this.state.site === 'news'){
      return(
        <NewsSite/>
      )
    }
    else if (this.state.site ==='fbi'){
      return(
        <FBIPage/>
      )
    } else if (this.state.site ==='name change'){
    	return(
    		<NameChange />
    	)
    } else if (this.state.site ==='email'){
    	return(
    		<Gmail />
    	)
    }
  }

  renderBookmarks(){
    return(
    <div class = "Bookmarks">
      Bookmarks:   
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

export default BrowserWindow;

*/