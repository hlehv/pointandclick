import React from "react";

import "./Dock.css";

class Dock extends React.Component {
  render() {
    return (
      <div className="dock">
        <ul>
          <li><i className="fas fa-folder"></i></li>
          <li><i className="fab fa-chrome active"></i></li>
          <li><i className="fas fa-file-word"></i></li>
          <li><i className="fas fa-comments"></i></li>
          <li><i className="fas fa-trash-alt"></i></li>
        </ul>
      </div>
    );
  }
}





export default Dock;