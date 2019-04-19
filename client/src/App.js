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
      return <Desktop />;
    } else {
      return <LogIn />;
    }
  }
}
export default App;