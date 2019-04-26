import React from "react";
import "./Gmail.css";
import emails from "../../../../data/Emails.json"

class Gmail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usernameEntered: '',
      passwordEntered: '',
      loggedIn: false,
      box: 'inbox'
    }
    this.emails = emails;
    this.name = "GOOGLE CHROME";
  }

  render() {
  	return(
  		  <div>
          {this.renderContents()}
  			</div>
  	);
  }

  renderContents(){
    if (this.state.loggedIn){
      if (this.state.box === 'inbox') {
        return(
          <div class="padding">
            <table>
              <tr>
                <th>Sender</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
              {this.emails.map((email) => {
                return (
                  <>
                    <tr>  
                      <td>{email.sender}</td>
                      <td>{email.subject}</td>
                      <td>{email.date}</td>
                    </tr>
                    <tr class="email-body">
                      <td colspan="3">{email.message}</td>
                    </tr>
                  </>
                )
              })}
            </table>
          </div>
        )
      }
      else if (this.state.box === 'trash') {
        return(
          <div id="email-content">
            <table>
              <tr>
                <th>Sender/Message</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>SouthEastern Airlines confirmation@southeasternflights.com</td>
                <td>Sender</td>
                <td>Message
                Date</td>
              </tr>
            </table>
          </div>
        )
      }
    }
    return (
      <div id="login">
        <div>
          <div><i class="far fa-envelope big"></i></div>
          <div class="big">Gmail</div>
          <div class="medium">Sign in</div>
        </div>
        <input type="text" id="emailInput" onChange={this.onEmailChange} name="name" placeholder="email"/>
        <br />
        <input type="text" id="passwordInput" onChange={this.onPasswordChange} name="name" placeholder="password"/>
        <br />
        <button onClick={this.onSubmitClick}>submit</button>
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
      if (this.state.passwordEntered === 'NewRocksford' 
        && this.state.emailEntered === 'davidpapen@gmail.com'){
        this.setState({
          loggedIn: true
        })
      } else {
        alert ("Incorrect email or password. Password hint: Hometown")
      }
  }
}

export default Gmail;