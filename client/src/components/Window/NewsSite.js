import React from "react";
import "./NewsSite.css";
import newspaperpic from "../../images/newspaperpic.jpg"

class NewsSite extends React.Component {
  render() {
  	return(
  		  	<div class="NewsSite">
  		  		<img src={newspaperpic} alt = "newspaper" id="newspaperpic"></img>
  				Hello welcome to the news
  			</div>
  		)
  }

}

export default NewsSite;