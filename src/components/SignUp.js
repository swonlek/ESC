import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import { 
  Link,
  withRouter, } from 'react-router-dom';
import { auth, db } from '../firebase';
import * as routes from '../constants/routes';

// displayed content
const SignUpPage = ({ history }) =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>


// ===========================================
// inititalise the component
const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

// input fields
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
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
      firstName,
      lastName,
      email,
      passwordOne,
      selectedValue,
    } = this.state;

    const {
      history,
    } = this.props;

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
    }

  render() {
    const {
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    // error
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            value={firstName}
            onChange={event => this.setState(byPropKey('firstName', event.target.value))}
            type="text"
            placeholder="First Name e.g. Jane"
          />
          <input
            value={lastName}
            onChange={event => this.setState(byPropKey('lastName', event.target.value))}
            type="text"
            placeholder="Last Name e.g. Doe"
          />
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password (more than 6 characters)"
          />
          <input
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
          <RadioGroup name="role" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
            <Radio value="Student" />Student
            <Radio value="Professor" />Professor
          </RadioGroup>
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>

          { error && <p>{error.message}</p> }


        </form>
      </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account? 
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};