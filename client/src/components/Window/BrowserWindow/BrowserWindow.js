import React from "react";
import "./BrowserWindow.css";
import NewsSite from "../Websites/NewsSite.js"
import FBIPage from "../Websites/FBIPage.js"
import NameChange from "../Websites/NameChange.js"
import Gmail from "../Websites/Gmail/Gmail.js"
import FilePic from "../../../images/emptyfile.png"

class BrowserWindow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'open',
      site: 'news',
      bookmarks: ['news', 'fbi', 'email', 'name change']
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
    else if (this.state.site === 'fbi'){
      return(
        <FBIPage/>
      )
    } else if (this.state.site === 'name change'){
    	return(
    		<NameChange/>
    	)
    } else if (this.state.site === 'email'){
    	return(
    		<Gmail/>
    	)
    }
  }

  renderBookmarks(){
    return(
      <div class = "Bookmarks">  
        {this.state.bookmarks.map((bookmark, index) =>
        (
          <button class="bookmark" key={index} onClick={() => this.handleBookmarksClick(index)}><img src={FilePic} alt="FilePic" id="file-pic"></img><span class="bookmarktext">{bookmark}</span></button>
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