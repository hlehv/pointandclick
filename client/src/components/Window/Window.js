import React from "react";
import "./Window.css";


class Window extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div class="Window_container">
        {/*<Window_topbar/>*/}
        {this.renderWindow()}
      </div>
    );
  }

  handleClick = () => {

  }

  renderWindow(){
    return(<div class="Window">
      Window here
    </div>);
  }
}

export default Window;