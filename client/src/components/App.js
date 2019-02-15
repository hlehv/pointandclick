import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Dock from "./Dock/Dock";
import Background from "./Background/Background";

class App extends React.Component {
  render() {
    return (
      <div className="App">
		<Background />
        <Sidebar />
        <Dock />
      </div>
    );
  }
}

export default App;