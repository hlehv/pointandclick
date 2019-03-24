import React from "react";
import "./Gmail.css";

class Gmail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usernameEntered: '',
      passwordEntered: '',
      loggedIn: false,
    }
    this.name = "GOOGLE CHROME";
  }

  render() {
  	return(
  		  <div class="gmail">
          {this.renderContents()}
  			</div>
  	);
  }

  renderContents(){
    if (this.state.loggedIn){
      return(
        <div id="email-content">
          <table>
            <tr>
              <th>Sender</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
            <tr>
              <th>SouthEastern Airlines confirmation@southeasternflights.com</th>
              <th>receipt - Confirmation of Purchase</th>
              <th>05/21/18</th>
            </tr>
            <tr>
              <th>bnelson@mccorcoran-law.com</th>
              <th>Absence this week</th>
              <th>05/19/18</th>
            </tr>
            <tr>
              <th>Landon Home Security confirmation@landonazsecurity.com</th>
              <th>Confirmation of purchase - Landon Home Security</th>
              <th>5/08/18</th>
            </tr>
            <tr>
              <th>John McFarmer (john.d.mcf@gmail.com</th>
              <th>This weekend</th>
              <th>April 11th 3:14 pm</th>
            </tr>
          </table>
        </div>
      )
    }
    return (
      <div id="login">
        <div id="welcome-message">
          Welcome to Gmail
        </div>
        <br />
        <input type="text" id="emailInput" onChange={this.onEmailChange} name="name" placeholder="email"/>
        <br />
        <input type="text" id="passwordInput" onChange={this.onPasswordChange} name="name" placeholder="password"/>
        <br />
        <button onClick={this.onSubmitClick}>submit </button>
      </div>
    );
  }

  onPasswordChange = (e) => {
    this.setState({
      passwordEntered: e.target.value
    })
  }

  onEmailChange = (e) => {
    this.setState({
      emailEntered: e.target.value
    })
  }

  onSubmitClick = () => {
      if (this.state.passwordEntered === 'danzilo' 
        && this.state.emailEntered === 'hlehv'){
        this.setState({
          loggedIn: true
        })
      } else {
        alert ("Incorrect email or password. Password hint: mother's maiden name")
      }
  }
}

export default Gmail;