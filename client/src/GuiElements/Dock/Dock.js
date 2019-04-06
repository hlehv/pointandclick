import React from "react";
import "./Dock.css";
import { FileExplorer, WebBrowser } from "../../Applications";

class Dock extends React.Component {
  render() {
    return (
      <div className="dock">
        <ul>
          <li><i onClick={(e) => this.openApplication(e, <FileExplorer close={ this.closeApplication } />) } className="fas fa-folder"></i></li>
          <li><i onClick={(e) => this.openApplication(e, <WebBrowser close={ this.closeApplication } />) } className="fab fa-chrome"></i></li>
          <li><i onClick={() => this.openApplication()} className="fas fa-file-word"></i></li>
          <li><i onClick={() => this.openApplication()} className="fas fa-comments"></i></li>
          <li><i onClick={() => this.openApplication()} className="fas fa-trash-alt"></i></li>
        </ul>
      </div>
    );
  }
  openApplication = (component, app) => {
    component.target.className += " active";
    this.props.openApplication(app);
  }
  closeApplication = () => {
    this.props.closeApplication();
  }
}

export default Dock;