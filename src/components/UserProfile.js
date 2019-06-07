import React, { Component } from 'react';

class UserProfile extends Component {

	render () {

		return (

			<div>

				<div>Username: { this.props.userName }</div>
				<div>Member Since: { this.props.memberSince }</div>

			</div>

		);

	}

}

export default UserProfile;