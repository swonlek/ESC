import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import withAuthorization from '../withAuthorization';

const StudentHome = (props, {authUser}) =>
// TODO: shift to navigation once we find out how to do the dang role based authorisation
// <Link to={routes.BOOKMARK}>Bookmarks</Link>
// <Link to={routes.GRADES_STUD}>Grades</Link><br/>
//		<Link to={routes.FEEDBACK_STUD}>Give Feedback for lecture</Link><br/>

	<div>
		Home for students<br/>
		Temp:<br/>
		Student - accessible pages: <br/>
		<ul>
			<Link to={routes.LECTURE}>Lectures</Link><br/>
			
		</ul>
	</div>	
StudentHome.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(StudentHome);