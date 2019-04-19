import React from "react";
import NameChangePic from "../../../images/NameChangeCropped.png"

class NameChange extends React.Component {
  render() {
  	return(
  		  	<div class="NameChange">
  		  		How to change your name: Follow these steps
  		  		<ul>
	  		  		<li> Choose your new name </li>
	  		  		<li> Post your name change in the local newspaper 3 weeks in a row </li>
  		  		</ul>
  		  		<img src={NameChangePic} alt = "namechange" id="namechangepic"></img>
  			</div>
  		);
  }

}

export default NameChange;