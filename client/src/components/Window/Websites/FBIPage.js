import React from "react";
import "./FBIPage.css"
import FBIPic from "../../../images/FBIPic.jpg"

class FBIPage extends React.Component {
  render() {
  	return(
  		  	<div class="FBIPage">
  		  		<img src={FBIPic} alt = "FBI" id="fbipic"></img>
  			</div>
  		)
  }

}

export default FBIPage;