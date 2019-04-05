import React from "react";
import "./FBIPage.css";
import fbilogo from "../../../images/fbi-logo.jpg";
import mugshot from "../../../images/mugshot.jpg";

class FBIPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "search",
			query: ""
		};
		this.felons = ["Paul Blaer", "Jae Woo Lee", "Dan Rubenstein", "Adam Cannon"];

		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.renderSearchPage = this.renderSearchPage.bind(this);
	}

	handleChange(event) {
  		this.setState({query: event.target.value});
  	}

	handleSearch(event) {
	    if (this.state.status === "search") this.setState({status: "browse"});
	    else this.setState({status: "search"});
	}

	render() {
		if (this.state.status === "search") {
		  	return (
		  		<div class="fbi-page">
	  				{this.renderSearchPage()}
	  			</div>
		  	);
	  	}
	  	else {
	  		return (
	  			<div class="fbi-page">
	  				<button id="back-button" onClick={() => this.handleSearch()}>BACK</button>
	  				{this.renderResultsPage()}
	  			</div>
	  		);
	  	}
  	}

	renderSearchPage() {
		return ( 
			<div class="search-page">
		   		<img src={fbilogo} alt="FBI" id="fbi-logo"></img>
		   		<div class="title">THE FBI DATABASE OF FELONS</div>
		   		<input type="text" value={this.state.query} onChange={this.handleChange} />
				<button onClick={() => this.handleSearch()}>SEARCH</button>
			</div>
		);
	}

	renderResultsPage() {
		if (this.felons.includes(this.state.query)) {
			return (
				<div class="results-page">
		  			<div class="title">WANTED BY THE FBI</div><br/>
		  			<img src={mugshot} id="mugshot"></img>
		  			<table id="felon-info">
		  				<tr>
		  					<td>NAME:</td> 
		  					<td>{this.state.query}</td>
		  				</tr>
		  				<tr>
		  					<td>AGE:</td> 
		  					<td>35</td> 
		  				</tr>
		  				<tr>
		  					<td>HEIGHT:</td> 
		  					<td>5'10''</td> 
		  				</tr>
		  				<tr>
		  					<td>WEIGHT:</td> 
		  					<td>180 lbs</td> 
		  				</tr>
		  				<tr>
		  					<td>GENDER:</td> 
		  					<td>M</td> 
		  				</tr>
		  				<tr>
		  					<td>HOMETOWN:</td> 
		  					<td>New Rocksford, Connecticut</td> 
		  				</tr>
		  				<tr>
		  					<td>CRIME:</td> 
		  					<td>
		  						The fugitive was charged with conspiracy 
		  						to steal trade secrets, a federal warrant 
		  						was issued for his arrest in the United 
		  						States District Court, Southern District 
		  						of Iowa, on December 17, 2013. If you have 
		  						any information concerning this person, 
		  						please contact your local FBI office or 
		  						the nearest American Embassy or consulate.
		  					</td> 
		  				</tr>
		  				<tr>
		  					<td nowrap>LAST SEEN:</td> 
		  					<td>La Paz, Mexico</td> 
		  				</tr>
		  			</table>
	  			</div>
	  		);
	  	}
	  	else {
	  		return (
				<div class="results-page title">NO RESULTS FOR "{this.state.query}"</div>
	  		);
	  	}
	}
}

export default FBIPage;