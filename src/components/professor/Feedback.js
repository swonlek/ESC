import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import * as routes from '../../constants/routes';
import withAuthorization from '../withAuthorization';

const ProfFeedback = (props, {authUser}) =>
// TODO: professor (first name),
// TODO: feedback for latest lecture displayed
// TODO: feedback for prev lectures as link -> Each page lists feedback for that lecture.
	<div>
		<h1>Welcome professor, </h1>
		<p>View your feedback for this lecture</p>
	</div>	
ProfFeedback.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ProfFeedback);