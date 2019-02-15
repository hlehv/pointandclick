import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Dock from "./Dock/Dock";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Dock />
      </div>
    );
  }
}

export default App;