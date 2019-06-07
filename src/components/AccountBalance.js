import React, {Component} from 'react';

class AccountBalance extends Component {

	constructor (props) {

		super(props);

		this.state = {

			credits: this.props.credits,
			creditValue: 0,

			debits: this.props.debits,
			debitValue: 0

		}

	}

	render () {

		let d = this.props.debits.reduce( (totalDeb, currVal) => {
          
          return totalDeb + currVal.amount

        }, 0);

		let c = this.props.credits.reduce( (totalCred, currVal) => {

          return totalCred + currVal.amount

        }, 0);

		return (
        
	        <div>
	          Balance: 
	          	{ 
	          		((c - d)).toFixed(2)
	          		// this.state.creditValue + ", " + this.state.debitValue
	          	}
	        </div>

	    );


	}

}

export default AccountBalance;