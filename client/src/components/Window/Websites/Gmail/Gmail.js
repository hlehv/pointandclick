import React from "react";
import "./Gmail.css";

class Gmail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usernameEntered: '',
      passwordEntered: '',
      loggedIn: false,
      box: 'inbox'
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
      if (this.state.box == 'inbox') {
        return(
          <div id="email-content">
            <table>
              <tr>
                <th>Sender/Message</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
              <tr>
                <th>SouthEastern Airlines confirmation@southeasternflights.com
                <font size="2">
                <br/><br/>Dear Mr. Papen,

                <br/>Order Date: 05/21/18

                <br/>Confirmation Number: 01688413

               <br/> Flight Number: AZ-929

               <br/> Departure: IFP 05/26/18 9:10 AM (MST)

                <br/>Estimated Arrival: BGR 05/26/18 4:35 PM (EST)
                <br/>This is a confirmation of your recent ticket purchase. If you plan to check any baggage please refer to the FAQ page on our website and plan to arrive at your designated airport at least 2 hours before boarding time. Thank you for flying with us.

                <br/>This is an automated response. Please do not reply to this email. </font></th>
                <th>Sender</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
              <tr>
                <th>bnelson@mccorcoran-law.com
                <font size="2">
                <br/><br/>David!

                <br/>We did not seen you in the office at all this week, and have not heard from you about taking personal time off. I feel I have been generous in the past in accommodating your familial leaves of absence.

                <br/>Of course if this is due to a personal emergency I can be lenient again, we would simply appreciate hearing from you in advance. Send Carmen my best.

                <br/><br/>Sincerely,<br/>BN</font>
                </th>
                <th>bnelson@mccorcoran-law.com</th>
                <th>Absence this week</th>
                <th>05/19/18</th>
              </tr>
              <tr>
                <th>Landon Home Security confirmation@landonazsecurity.com

                <font size="2">
                <br/><br/>Dear Mr. Papen,

                <br/>Thank you for purchasing our new and improved home security sensors. Your safety is our priority. If you need installation help please follow up with our team of competent customer assistants.

                <br/><br/>1(800)-209-1962
                <br/>Order Date: 05/08/2018
                <br/>Order Number: 11267
                <br/>This is an automated receipt. Please do not reply to this email.</font>
                </th>
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
      else if (this.state.box == 'trash') {
        return(
          <div id="email-content">
            <table>
              <tr>
                <th>Sender/Message</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
              <tr>
                <th>SouthEastern Airlines confirmation@southeasternflights.com
                <font size="2">
                <br/><br/>Dear Mr. Papen,

                <br/>Order Date: 05/21/18

                <br/>Confirmation Number: 01688413

               <br/> Flight Number: AZ-929

               <br/> Departure: IFP 05/26/18 9:10 AM (MST)

                <br/>Estimated Arrival: BGR 05/26/18 4:35 PM (EST)
                <br/>This is a confirmation of your recent ticket purchase. If you plan to check any baggage please refer to the FAQ page on our website and plan to arrive at your designated airport at least 2 hours before boarding time. Thank you for flying with us.

                <br/>This is an automated response. Please do not reply to this email. </font></th>
                <th>Sender</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </table>
          </div>
        )
      }
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
      if (this.state.passwordEntered == 'NewRocksford' 
        && this.state.emailEntered == 'davidpapen@gmail.com'){
        this.setState({
          loggedIn: true
        })
      } else {
        alert ("Incorrect email or password. Password hint: mother's maiden name")
      }
  }
}

export default Gmail;