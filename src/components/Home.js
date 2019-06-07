import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

class Home extends Component {

	render () {

		return (

			<div className = "home-wrapper">

				<AccountBalance credits = { this.props.credits } debits = { this.props.debits } />

			</div>

		);

	}

}

export default Home;