import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import withAuthorization from '../withAuthorization';

const ProfHome = (props, {authUser}) =>
	<div>
		<p>Home for Prof<br/>
		Hello<br/>
		<Link to={routes.FEEDBACK_PROF}>View Lecture Feedback</Link>
		</p>

	</div>	
ProfHome.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ProfHome);