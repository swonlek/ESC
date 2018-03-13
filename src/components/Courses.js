import React from 'react';
import PropTypes from 'prop-types';

import withAuthorization from './withAuthorization';

// roles
// import StudentHome from './student/Home';
// import ProfHome from './professor/Home';

const SubbedCourses = ({authUser}, props) =>
  <div>
    <h1>Courses</h1>
    <p>This is where all the subscribed courses will be displayed.<br/>
    There will be links to the specific course page.</p>

  </div>

CoursePage.contextTypes = {
	authUser : PropTypes.object,
}
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(CoursePage);