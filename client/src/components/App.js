import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Dock from "./Dock/Dock";
import Background from "./Background/Background";
import Window from './Window/Window'
import BrowserWindow from './Window/BrowserWindow/BrowserWindow'

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


