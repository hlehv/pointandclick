import React from "react";
import "../Window.css";
import FBIPage from "../Websites/FBIPage.js"

class FileViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'open',
      tabs: ['Documents', 'Downloads']
    }
    this.name = "FILE VIEWER";
  }

  render() {
    return (
      <div class="FileViewer_container">
        {this.renderFileViewer()}
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

  renderFileViewer() {
      return (
        <div class="FileViewer">
          {this.renderTabs()}
          {this.renderContents()}
        </div>
      );
  }

  renderContents() {
      return (
        <FBIPage/>
      );
  }

  renderTabs(){
      return(
      <div class = "Bookmarks">
        Files:
        <br />
        {this.state.tabs.map((bookmark, index) =>
        (
          <div> <button class="bookmark" key={index} onClick={() => this.handleBookmarksClick(index)}>{bookmark}</button> </div>
        )

        )}
      </div>
      )
    }

    handleBookmarksClick = (index) => {
        this.setState({
          site: this.state.tabs[index]
        })
    }
}

export default FileViewer;