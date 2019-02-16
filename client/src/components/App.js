import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import dock from "./dock/Dock";
import Background from "./background/Background";

class App extends React.Component {
  render() {
    return (
      <div className="App">
		<Background />
        <Sidebar />
        <dock />
      </div>
    );
  }
}

export default App;


