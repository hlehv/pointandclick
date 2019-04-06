import React from "react";
import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Dock from "./Dock/Dock";
import Background from "./Background/Background";
import Window from './Window/Window'

class App extends React.Component {
  render() {
    return (
      <div className="App">
	      <Background />
        <Sidebar />
        <Dock />
        <Window />
      </div>
    );
  }
}

export default App;


