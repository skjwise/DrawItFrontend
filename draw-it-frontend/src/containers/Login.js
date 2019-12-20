import React from 'react';
import {Button, Form } from 'semantic-ui-react';

const Login = () => {
    return (
      <div>
          <br/>
          <br/>
          <br/>
          <h3>Please Login to Draw It!</h3> 
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
            <Button type="submit" value="Login" >login</Button>
          </Form.Field>
        </Form>
      </div>
  
    )
  }


  export default Login;