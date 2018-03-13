
/*
import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import { withRouter } from 'react-router-dom';
// import { auth, db } from '../../firebase';
// import * as routes from '../../constants/routes';
// TODO: push answers to firebase
// TODO: make rating compulsory

// displayed content
const StudentFeedbackPage = ({ history }) =>
  <div>
    <h1>Give Feedback</h1>
    <FeedbackForm history={history} />
  </div>


// ===========================================
// inititalise the component
const INITIAL_STATE = {
  qOne:'',
  qTwo: '',
  qThree: '',
  qExtra: '',
  error: null,
};

// input fields
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { ...INITIAL_STATE };
  }

  handleChange(value){
    this.setState({selectedValue:value});
  }
  onSubmit = (event) => {

    const {
      qOne,
      qTwo,
      qThree,
      qExtra,
    } = this.state;
//*
    const {
      history,
    } = this.props;

  // TODO: push answers into firebase
  // db.something

//*/ /*
  auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {

          // Create a user in your own accessible Firebase Database too
          db.doCreateUser(authUser.uid, email, selectedValue, firstName, lastName)
            .then(() => {
              this.setState(() => ({ ...INITIAL_STATE }));
              history.push(routes.HOME);
            })
            .catch(error => {
              this.setState(byPropKey('error', error));
            });

        })
        .catch(error => {
        this.setState(byPropKey('error', error));
      });


      event.preventDefault();
      *///
      /*
    }

  render(){
    const {
      qOne,
      qTwo,
      qThree,
      qExtra,
      error,
    } = this.state;

    // error
    const isInvalid =
      qOne === '' ||
      qTwo === '' ||
      qThree === '' ||
      qExtra === '' ;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            value={qOne}
            onChange={event => this.setState(byPropKey('qOne', event.target.value))}
            type="text"
            placeholder="question one"
          />
          <input
            value={qTwo}
            onChange={event => this.setState(byPropKey('qTwo', event.target.value))}
            type="text"
            placeholder="question two"
          />
          <input
            value={qThree}
            onChange={event => this.setState(byPropKey('qThree', event.target.value))}
            type="text"
            placeholder="question three"
          />
          <input
            value={qExtra}
            onChange={event => this.setState(byPropKey('qExtra', event.target.value))}
            type="text"
            placeholder="Any extra comments/suggestions?"
          />
        
          <RadioGroup name="rate1" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
            <Radio value="1" />1
            <Radio value="2" />2
            <Radio value="3" />3
            <Radio value="4" />4
            <Radio value="5" />5          
          </RadioGroup>
          <button disabled={isInvalid} type="submit">
            Submit Feedback
          </button>

          { error && <p>{error.message}</p> }


        </form>
      </div>
    );
  }
}

export default withRouter(StudentFeedbackPage);

export {
  FeedbackForm,
};

*/