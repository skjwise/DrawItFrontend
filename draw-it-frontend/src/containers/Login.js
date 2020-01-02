import React from 'react';
import {Button, Form } from 'semantic-ui-react';
import Canvas from './Canvas';
import SignUp from './SignUp';

const Login = (props) => {

    return (
      <div>
            <br />
            <br /> 
            <br />
          <h3>Login!</h3> 
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" placeholder="Enter Username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Enter Password" />
          </div>
          <Form.Field>
              <br/>
            <Button onClick={props.handleLogin} type="submit" value="Login" >Login!</Button>
          </Form.Field>
        </Form>
      </div>
  
    )
  }


  export default Login;