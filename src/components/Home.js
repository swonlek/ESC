import React from 'react';
import PropTypes from 'prop-types';

import withAuthorization from './withAuthorization';

// roles
import StudentHome from './student/Home';
import ProfHome from './professor/Home';

const HomePage = ({authUser}, props) =>
  <div>
    { authUser === "student"
  			? <ProfHome />
  			: <StudentHome />
  		}
  </div>

HomePage.contextTypes = {
	authUser : PropTypes.object,
}
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);