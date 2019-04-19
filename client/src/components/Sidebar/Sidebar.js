import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'closed'
    };
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
          Restart
        </div>
        <div class="user_box">
          Shut Down
        </div>
        <div class="user_box">
          Log Out User
        </div>
        <button type="button" class="open_close_button" onClick={() => this.handleClick()}>
          <i class="fab fa-windows"></i>
        </button>
        </div>
      );
    } else {
      return (
        <button class="open_close_button" type="button" onClick={() => this.handleClick()}>
          <i class="fab fa-windows"></i>
        </button>
        );
    }
  }
}

export default Sidebar;