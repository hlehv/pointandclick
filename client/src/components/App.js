import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Dock from "./Dock/Dock";
import Background from "./Background/Background";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
		<Background />
        <Dock />
      </div>
    );
  }
}

export default App;