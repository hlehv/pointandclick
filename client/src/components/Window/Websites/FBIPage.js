import React from "react";
import "./FBIPage.css";
import fbilogo from "../../../images/fbi-logo.jpg";
import mugshot from "../../../images/mugshot.jpg";
import felons from './FBIPageData.json'

class FBIPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "search",
			query: ""
		};
		this.felons = felons;

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
		console.log(this.felons);
		if (this.state.query in this.felons) {
			const data = this.felons[this.state.query];
			return (
				<div class="results-page">
		  			<div class="title">WANTED BY THE FBI</div>
		  			<img src={mugshot} id="mugshot"></img>
		  			<table id="felon-info">
		  				<tbody>
			  				<tr>
			  					<td>NAME:</td> 
			  					<td>{data.name}</td>
			  				</tr>
			  				<tr>
			  					<td>AGE:</td> 
			  					<td>{data.age}</td> 
			  				</tr>
			  				<tr>
			  					<td>HEIGHT:</td> 
			  					<td>{data.height}</td> 
			  				</tr>
			  				<tr>
			  					<td>WEIGHT:</td> 
			  					<td>{data.weight}</td> 
			  				</tr>
			  				<tr>
			  					<td>GENDER:</td> 
			  					<td>{data.gender}</td> 
			  				</tr>
			  				<tr>
			  					<td>CRIME:</td> 
			  					<td>{data.crime}</td> 
			  				</tr>
			  				<tr>
			  					<td nowrap="true">BORN IN:</td> 
			  					<td>{data["hometown"]}</td> 
			  				</tr>
			  				<tr>
			  					<td nowrap="true">LAST SEEN:</td> 
			  					<td>{data["last seen"]}</td> 
			  				</tr>
		  				</tbody>
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

	getResults() {

	}
}

export default FBIPage;