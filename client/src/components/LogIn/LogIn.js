import React from "react";
import "./LogIn.css"
import carmen from "../../images/Carmen.png";
import sophie from "../../images/Sophie.png";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      selectedUser: "",
      dad: {password: "abc", locked: true},
      mom: {password: "abc", locked: true},
      carmen: {password: "abc", locked: true},
      sophie: {password: "brown", locked: false}
    };
  }

  render() {
    if (this.state.selectedUser === "")
      return this.renderAllAccounts();
    else
      return this.renderSelectedAccount();
  }

  renderAllAccounts() {
    return (
      <div id="accounts">
        <div className="user" onClick={() => this.selectUser("dad")}>
          <img src={carmen} className="user-image" alt="dad"></img>
          <div>
            Dad  (David)
          </div>
        </div>
        <div className="user" onClick={() => this.selectUser("mom")}>
          <img src={sophie} className="user-image" alt="mom"></img>
          <div>
            Mom (Melissa)
          </div>
        </div>
        <div className="user" onClick={() => this.selectUser("carmen")}>
          <img src={carmen} className="user-image" alt="carmen"></img>
          <div>
            Carmen 
          </div>
        </div>
        <div className="user" onClick={() => this.selectUser("sophie")}>
          <img src={sophie} className="user-image" alt="sophie"></img>
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
        <img src={carmen} className="user-image" alt="user"></img>
        <div>          
          {this.state.selectedUser} <br/>
          Password hint: My hair color :)<br/>
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