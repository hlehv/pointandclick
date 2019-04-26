import React from "react";
import "./Sidebar.css";
import Carmen from  "../../images/Carmen.png";

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'closed'
    };
  }

  render() {
    return (
      <div className="sidebar">
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

        <div className="user_box">
          Restart
        </div>
        <div className="user_box">
          Shut Down
        </div>
        <div className="user_box">
          Log Out User
        </div>
        <button type="button" className="open_close_button" onClick={() => this.handleClick()}>
          <i className="fab fa-windows"></i>
        </button>
        </div>
      );
    } else {
      return (
        <button className="open_close_button" type="button" onClick={() => this.handleClick()}>
          <i className="fab fa-windows"></i>
        </button>
      );
    }
  }
}

export default Sidebar;
