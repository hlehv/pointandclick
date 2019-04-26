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
      isValidPassword: false
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
        <Sidebar logout={this.logout}/> 
        <Dock />
        <Window />
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