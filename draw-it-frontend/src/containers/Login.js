import React from 'react';
import ReactDOM from 'react-dom';
// import {Button, Checkbox, Form } from 'semantic-ui-react';

const Login = () => {
    return (
      <div>
          <br/>
          <br/>
          <br/>
          <h3>Login!</h3> 
        <form>
          <div>
            <label htmlFor="username">Username:   </label>
            <input type="text" name="username" placeholder="Enter Username" />
          </div>
          <div>
            <label htmlFor="password">Password:      </label>
            <input type="password" name="password" placeholder="Enter Password" />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
  
    )
  }


  export default Login;