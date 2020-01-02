import React, {useState} from 'react';
import FormCard from '../components/FormCard';
import {Button, Form } from 'semantic-ui-react';
import Canvas from './Canvas';
import SignUp from './SignUp';
import { login } from "../adapters/API";


const Login = (props) => {
  const [loginData, setLoginData] = useState({});


  const handleLoginChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    login(loginData);
  }

    return (
      <div>
            <br />
            <br /> 
            <br />
          <h3>Login!</h3> 
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" placeholder="Enter Username" onChange={handleLoginChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Enter Password" onChange={handleLoginChange} />
          </div>
          <Form.Field>
              <br/>
            <Button onClick={handleLoginSubmit} type="submit" value="Login" >Login!</Button>
          </Form.Field>
        </Form>
      </div>
      // <FormCard title= "Login!"  handleSubmit = {props.handleSubmit}/>
  
    )
  }


  export default Login;