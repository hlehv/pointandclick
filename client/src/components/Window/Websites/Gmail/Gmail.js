import React from "react";

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
  		  <div class="NameChange">
          Welcome to gmail.
          {this.renderContents()}
  			</div>
  		);
  }

  renderContents(){
    if (this.state.loggedIn){
      return(
        <div>
          Youre in the email lmao
        </div>
      )
    }
    return (
      <div>
        Enter your email <input type="text" id="emailInput" onChange={this.onEmailChange} name="name" placeholder="email"/>
        <br />
        Enter your password <input type="text" id="passwordInput" onChange={this.onPasswordChange} name="name" placeholder="password"/>
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