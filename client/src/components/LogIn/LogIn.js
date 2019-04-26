import React from "react";
import "./LogIn.css"
import carmen from "../../images/Carmen.png";
import sophie from "../../images/Sophie.png";
import sophieLocked from "../../images/SophieLocked.png";
import carmenLocked from "../../images/CarmenLocked.png";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      selectedUser: "",
      dad: {password: "lansing", locked: false, hint: "Capital of Michigan", name: "Dad"},
      mom: {password: "abc", locked: true, name: "Mom"},
      carmen: {password: "abc", locked: true, name: "Carmen"},
      sophie: {password: "brown", locked: true, name: "Sophie", hint: "My hair color :)"}
    };
  }

  render() {
    if (this.state.selectedUser === "")
      return this.renderAllAccounts();
    else
      return this.renderSelectedAccount();
  }

  renderAllAccounts() {
    var carmenImage = carmen;
    if (this.state.carmen.locked)
      carmenImage = carmenLocked;
    var sophieImage = sophie;
    if (this.state.sophie.locked)
      sophieImage = sophieLocked;
    var dadImage = sophie;
    if (this.state.dad.locked)
      dadImage = sophieLocked;
    var momImage = carmen;
    if (this.state.mom.locked)
      momImage = carmenLocked;

    return (
      <div id="accounts">
        <div className="user" onClick={() => this.selectUser("dad")}>
          <img src={dadImage} className="user-image" alt="dad"></img>
          <div>
            Dad  (David)
          </div>
        </div>
        <div className="user" onClick={() => this.selectUser("mom")}>
          <img src={momImage} className="user-image" alt="mom"></img>
          <div>
            Mom (Melissa)
          </div>
        </div>
        <div className="user" onClick={() => this.selectUser("carmen")}>
          <img src={carmenImage} className="user-image" alt="carmen"></img>
          <div>
            Carmen 
          </div>
        </div>
        <div className="user" onClick={() => this.selectUser("sophie")}>
          <img src={sophieImage} className="user-image" alt="sophie"></img>
          <div>
            Sophie
          </div>
        </div>
      </div>
    );
  }

  renderSelectedAccount() {
    return (
      <div className="selected-user">
        <img src={sophie} className="user-image" alt="user"></img>
        <div>          
          {this.state.selectedUser} <br/>
          Password hint: {this.state[this.state.selectedUser].hint} <br/>
          <input type="text" onChange={this.onPasswordChange} onKeyDown={this.checkPassword}></input>
        </div>
      </div>
    );
  }

  selectUser = (user) => {
    console.log("here");

    if (this.state[user].locked)
      return;

    this.setState({
      selectedUser: user
    })
  }

  checkPassword = (e) => {
    const input = e.target.value;
    const selectedUser = this.state.selectedUser;
    if (e.key === "Enter" && input === this.state[selectedUser].password) 
      this.props.onValidPassword();
  }
}

export default LogIn;