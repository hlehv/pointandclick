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
          Mom
        </div>
        <div className="user_box">
          Dad
        </div>
        <div className="user_box">
          Grandpappy
        </div>
        <div className="user_box">
          Aunty Sue
        </div>
        <button type="button" className="open_close_button" onClick={() => this.handleClick()}> Close </button>
        </div>
      );
    } else {
      console.log("hello")
      return (
        <button className="open_close_button" type="button" onClick={() => this.handleClick()}> Open </button>
        );
    }
  }
}

export default Sidebar;