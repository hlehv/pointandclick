import React from "react";
import "../Window.css";

class FileViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'open',
      sidebars: ['Documents', 'Downloads']
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
          {this.renderContents()}
        </div>
      );
  }

  renderContents(){
  }


  handleBookmarksClick = (index) => {
      this.setState({
        site: this.state.bookmarks[index]
      })
  }
}

export default FileViewer;