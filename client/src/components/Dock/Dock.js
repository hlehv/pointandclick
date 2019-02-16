import React from "react";
import "./dock.css";

class Dock extends React.Component {
  render() {
    return (
      <div className="dock">
        <a href="#file-explorer"><i className="fas fa-folder"></i></a>
        <a href="#web-browser"><i className="fab fa-chrome"></i></a>
        <a href="#word-processor"><i className="fas fa-file-word"></i></a>
        <a href="#messages"><i className="fas fa-comments"></i></a>
        <a href="#trash"><i className="fas fa-trash-alt"></i></a>
      </div>
    );
  }
}





export default Dock;