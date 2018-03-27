import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import { 
  Link,
  withRouter, } from 'react-router-dom';
import { auth, db } from '../firebase';
import {Button, Grid, Row, Col} from "react-bootstrap";
import {Card, CardActions, CardHeader, TextField} from 'material-ui';
import * as routes from '../constants/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// displayed content
const SignUpPage = ({ history }) =>
  <div>
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
<MuiThemeProvider>
        <form onSubmit={this.onSubmit}>
<<<<<<< HEAD
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
=======
          { error && <p>{error.message}</p> }
          <Row>
            <Col sm={4}>
              <Grid>
                <Row className="Show-grid">
                  <Col md={4}>
                    <Card>
                      <CardHeader
                        title="WELCOME BACK"
                        subtitle="Please login"
                      />
                      <Grid>
                      <Grid>
                      <Grid>
                      <h4>Username</h4>
                      <Grid>
                        <TextField
                         value={email}
>>>>>>> b5d349c3b627ea13f475d2e8788247d574d9777b
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
                        >
                      </TextField>
                      </Grid>
                      </Grid>
                      </Grid>
                      </Grid>
                      <Grid>
                      <Grid>
                      <Grid>
                      <h4>Password</h4>
                      <Grid>
                        <TextField
                          value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
<<<<<<< HEAD
            placeholder="Password (more than 6 characters)"
          />
          <input
            value={passwordTwo}
=======
            placeholder="Password"
                        >
                      </TextField>
                      </Grid>
                      </Grid>
                      </Grid>
                      </Grid>
                      <Grid>
                      <Grid>
                      <Grid>
                      <h4>Confirm Password</h4>
                      <Grid>
                        <TextField
                        value={passwordTwo}
>>>>>>> b5d349c3b627ea13f475d2e8788247d574d9777b
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
                        >
                      </TextField>
                      </Grid>
                      </Grid>
                      </Grid>
                      </Grid>
                      <Grid>
                      <Grid>
                      <Grid>
                      
                      <Grid>
                         <RadioGroup name="role" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
            <Radio value="Student" />Student
            <Radio value="Professor" />Professor
          </RadioGroup>
                      </Grid>
                      </Grid>
                      </Grid>
                      </Grid>
                      <CardActions>
                        <br/>
                        <Grid>
                        <Grid>
                        <Grid>
                        <Grid>
                        <Grid>
                        <Col md={2} sm={1}>
                          <Button 
                            bsStyle="info" block type="submit">
                            Sign Up</Button>
                        </Col>
                        </Grid>
                        </Grid>
                        </Grid>
                        </Grid>
                        </Grid>

                        <Col sm={2}/>
                      </CardActions>
                      <br />
                      <br />
                    </Card>
                  </Col>
                  <Col sm={4} />
                </Row>
              </Grid>
            </Col>
          </Row>
        </form>
      </MuiThemeProvider>
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