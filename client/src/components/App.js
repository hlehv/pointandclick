import React from "react";
import Sidebar from "./Sidebar/Sidebar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
		<background />
      </div>
    );
  }
}

export default App;