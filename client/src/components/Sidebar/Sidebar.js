import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <a href ="#">Mom</a>
        <a href = "#">Dad</a>
        <a href = "#">Grandpappy</a>
        <a href = "#">Aunty Sue</a>
      </div>
    );
  }
}
export default Sidebar;