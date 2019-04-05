// import React from "react";
// import Sidebar from "./Sidebar/Sidebar";
// import Dock from "./Dock/Dock";
// import Background from "./Background/Background";
// import Window from './Window/Window';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
// 	      <Background />
//         <Sidebar />
//         <Dock />
//         <Window />
//       </div>
//     );
//   }
// }
// export default App;

import React from "react";
import Desktop from "./Screens/Desktop/Desktop";
import LogIn from "./Screens/LogIn/LogIn";

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