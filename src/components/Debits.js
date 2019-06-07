import React, { Component } from 'react';
import axios from 'axios';

class Debits extends Component {

	constructor(props) {

		super(props);

		this.state = {

			description: '',

			amount: 0

		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.addDebits = this.addDebits.bind(this);
	}

	handleInputChange (e) {

		this.setState({
			[e.target.name]: e.target.value
		});

	}

	addDebits () {

		let t = [ ...this.props.debits ];

		t.push({ 
				description: this.state.description, 
				amount: parseInt(this.state.amount) 
		});

		this.props.updateDebits(t)

	}

	render () {

		let displayDebits = this.props.debits.map( (d, i) => {

			return (

				<div key = { i } >
					
					{ d.description }

					<p>{ d.amount }</p>

				</div>

			);

		} );

		return (

			<div>

				<h1>Debits</h1>

				<input type = "text" name = "description" onChange = { this.handleInputChange } value = { this.state.description  } />
				<input type = "text" name = "amount" onChange = { this.handleInputChange } value = { this.state.amount } />

				<button onClick = {this.addDebits}>Add+</button>

				{ displayDebits }

			</div>

		);

	}
}

export default Debits;

