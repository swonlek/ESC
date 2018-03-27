import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {Button, Grid, Row, Col} from "react-bootstrap";
import {Card, CardActions, CardHeader, TextField} from 'material-ui';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// displayed contents
const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

// ===========================================
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <MuiThemeProvider>
        <form onSubmit={this.onSubmit}>
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
                          value={password}
                          onChange={event => this.setState(byPropKey('password', event.target.value))}
                          type="password"
                          placeholder="Password"
                        >
                      </TextField>
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
                            Sign In</Button>
                        </Col>
                        </Grid>
                        </Grid>
                        </Grid>
                        </Grid>
                        </Grid>
                        <Col sm={2}/>
                          <Row>
                            <SignUpLink />
                          </Row>
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
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};