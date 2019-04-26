import React from "react";
import Desktop from "./Screens/Desktop/Desktop";
import LogIn from "./Screens/LogIn/LogIn";
import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: true
  };
  
  render() {
    if(this.state.loggedIn){
      return <Desktop logout={this.logout}/>;
    } else {
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

  setIsValid = () => {
    this.setState({
      loggedIn: true
    })
  }
  logout = () => {
    this.setState({
      loggedIn: false
    });
  }

}
export default App;