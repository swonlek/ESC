import React from 'react';
import PropTypes from 'prop-types';

import StudentAccounts from './student/Account';
import ProfAccounts from './professor/Account';
import withAuthorization from './withAuthorization';
// import { db } from '../firebase/firebase';

// pseudo code!
// function getRole(props, db, authUser){
// 	return db.ref('users/' + authUser.uid + '/role');
// }

const AccountPage = ({ authUser }, role) =>
  	// find out how to fetch role of current user and use it to do role-base authorisation
  	<div>
  		{ role === "student"
  			? <StudentAccounts />
  			: <ProfAccounts />
  		}
    	<p>hi</p>
  	</div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);