import React from "react";
import "./Window.css";

class Window extends React.Component {
  state = {
    open: true
  };
  render() {
    if(this.state.open) {
      return (
        <div className="window-container">
          <div className="top-bar">
            {this.props.title}
            <button className="button" onClick={() => this.close()}>X</button>
            <button className="button" onClick={() => this.maximize()}>+</button>
            <button className="button" onClick={() => this.minimize()}>-</button>
          </div>
          <div className="body">
            {this.props.contents}
          </div>
        </div>
      );
    } else
      return null;
  }
  close() {
    alert("CLICKED CLOSE");
    this.props.close();
  }
  maximize() {
    alert("CLICKED MAXIMIZE");
  }
  minimize() {
    alert("CLICKED MINIMIZE");
  }
}
export default Window;

// import BrowserWindow from "./BrowserWindow/BrowserWindow.js"
// import FileViewer from "./FileViewer/FileViewer.js"

//   constructor(props){
//     super(props);
//     this.state = {
//       status: 'open',
//       contents: 'browser',
//     }
//     this.name = "GOOGLE CHROME";
//   }

//   render() {
//     return (
//       <div class="Window_container">
//         {this.renderWindow()}
//       </div>
//     );
//   }

//   handleClick = () => {
//     if (this.state.status === 'open'){
//       this.setState({
//         status: 'closed'
//       })
//     } 
//     else {
//       this.setState({
//         status: 'open'
//       })
//     }
//   }

//   renderWindow() {
//     if (this.state.status ==='open') {
//       return (
//         <div class="Window">
//           {this.renderTopBar()}
//           <BrowserWindow />
//           {/*<FileViewer/>*/}
//         </div>
//       );
//     }
//     else {
//       return (
//         <div class="minimized-window" onClick={() => this.handleClick()}>
//           {this.name}
//         </div>
//       );
//     }
//   }

//   renderTopBar() {
//     return (
      // <div class="top-bar">
      //   {this.name}
      //   <button class="exit-button" onClick={() => this.handleClick()}>X</button>
      //   <button class="exit-button">+</button>
      //   <button class="exit-button">-</button>
      // </div>
//     );
//   }

// }

// export default Window;