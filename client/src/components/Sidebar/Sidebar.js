import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'open'
    }
  }

  render() {
    return (
      <div class="sidebar">
        {this.renderSidebar()}
      </div>
    );
  }

  handleClick = () => {
    if (this.state.status === 'open'){
      this.setState({
        status: 'closed'
      })
    } else {
      this.setState({
        status: 'open'
      })
    }


  }

  renderSidebar(){
    if (this.state.status==='open'){
      return (
        <div>
        <div class="user_box">
          Mom
        </div>
        <div class="user_box">
          Dad
        </div>
        <div class="user_box">
          Sophie
        </div>
        <div class="user_box">
          Carmen
        </div>
        <button type="button" class="open_close_button" onClick={() => this.handleClick()}> Close </button>
        </div>
      );
    } else {
      return (
        <button class="open_close_button" type="button" onClick={() => this.handleClick()}> Accounts </button>
        );
    }
  }
}

export default Sidebar;