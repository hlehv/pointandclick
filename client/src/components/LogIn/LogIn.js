import React from "react";
import "./LogIn.css"
import userImage from "../../images/Sophie.png";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "abc",
      input: ""
    };
  }

  render() {
    return (
      <div id="log-in-info">
        <img src={userImage} id="user-image"></img>
        <div>
          Sophie <br/>
          <input type="text" onChange={this.onPasswordChange} onKeyDown={this.checkPassword}></input>
        </div>
      </div>
    );
  }

  onPasswordChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  checkPassword = (e) => {
    if (e.key === "Enter" && this.state.input === this.state.password) 
        this.props.onValidPassword();
  }
}

export default LogIn;