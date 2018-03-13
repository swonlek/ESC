import React from 'react';
import PropTypes from 'prop-types';

import withAuthorization from './withAuthorization';

// roles
// import StudentHome from './student/Home';
// import ProfHome from './professor/Home';

const LecturePage = ({authUser}, props) =>
  <div>
    <h1>Lectures</h1>
    <p>This is where all the lectures will be displayed</p>
  </div>

LecturePage.contextTypes = {
	authUser : PropTypes.object,
}
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(LecturePage);