import React from "react";
import './App.css';
import LogIn from "./LogIn/LogIn";
import Sidebar from "./Sidebar/Sidebar";
import Dock from "./Dock/Dock";
import Background from "./Background/Background";
import Window from './Window/Window'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidPassword: false,
      files: [
        {
          "name": "text.txt",
          "hidden": false,
          "data": "Ayo this should be in the file"
        },
        {
          "name": "new_file_b.txt",
          "hidden": false,
          "data": "same"
        }
      ]
    };
  }

  render() {
    if (this.state.isValidPassword) {
      return this.renderDesktop();
    }
    else {
      return this.renderLogIn();
    }
  }

  renderLogIn() {
    return (
      <div className="App">
        <LogIn onValidPassword={this.setIsValid} />
      </div>
    );
  }

  renderDesktop() {
    return (
      <div className="App">
        <Background />

        { this.state.files.map( (file, id) => (
          file.hidden ? "" : 
          <ul className="files">
            <li className="file">
              <i key={id} className="far fa-file"></i>
              <p className="filename">{file.name}</p>
            </li>
          </ul>
        )) }

        <Sidebar logout={this.logout}/> 
        <Dock />
        <Window fileDownloaded={this.fileDownloaded}/>
      </div>
    );
  }

  setIsValid = () => {
    this.setState({
      isValidPassword: true
    })
  }
  logout = () => {
    this.setState({
      isValidPassword: false
    });
  }
}

export default App;