import React from 'react';
import PropTypes from 'prop-types';

import withAuthorization from '../withAuthorization';

const StudentAccount = (porps, {authUser}) =>
	<div>
		<h1>Account: {authUser.email}</h1>
		<p>Role: Student {authUser.role}</p>
	</div>	
StudentAccount.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(StudentAccount);