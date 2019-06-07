import React, { Component } from 'react';
import axios from 'axios';

class Credits extends Component {

	constructor(props) {

		super(props);

		this.state = {

			description: '',

			amount: 0

		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.addCredits = this.addCredits.bind(this);
	}

	handleInputChange (e) {

		this.setState({
			[e.target.name]: e.target.value
		});

	}

	addCredits () {

		let t = [ ...this.props.credits ];

		t.push({ 
				description: this.state.description, 
				amount: parseInt(this.state.amount) 
		});

		this.props.updateCredits(t)

	}

	render () {

		let displayCredits = this.props.credits.map( (d, i) => {

			return (

				<div key = { i } >
					
					{ d.description }

					<p>{ d.amount }</p>

				</div>

			);

		} );

		return (

			<div>

				<h1>Credits</h1>

				<input type = "text" name = "description" onChange = { this.handleInputChange } value = { this.state.description  } />
				<input type = "text" name = "amount" onChange = { this.handleInputChange } value = { this.state.amount } />

				<button onClick = {this.addCredits}>Add+</button>

				{ displayCredits }

			</div>

		);

	}
}

export default Credits;