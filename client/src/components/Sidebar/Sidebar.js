import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <div class="user_box">
          Mom
        </div>
        <div class="user_box">
          Dad
        </div>
        <div class="user_box">
          Grandpappy
        </div>
        <div class="user_box">
        Aunty Sue
        </div>
      </div>
    );
  }
}
export default Sidebar;