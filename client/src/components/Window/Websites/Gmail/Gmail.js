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
              <th>Paul Blaer</th>
              <th>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
              <th>11:59 PM</th>
            </tr>
            <tr>
              <th>Jae Woo Lee</th>
              <th>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
              <th>4:02 AM</th>
            </tr>
            <tr>
              <th>Dan Rubenstein</th>
              <th>Lorem ipsum dolor sit amet, consectetur adipiscing elit</th>
              <th>9:00 PM</th>
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