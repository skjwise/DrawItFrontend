import React from 'react';
import {Button, Form } from 'semantic-ui-react';

const SignUp = () => {
    return (
        <div>
        <br/>
          <br/>
          <br/>
          <h3> Please Enter Details below to Sign Up: </h3>
        <Form>
            <div>
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" name="firstName" placeholder="First Name" /> 
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" placeholder="Last Name" />
                <label htmlFor="lastName">Username:</label>
                <input type="text" name="username" placeholder="Enter Username" />
                <label htmlFor="lastName">Password:</label>
                <input type="password" name="password" placeholder="Enter Password" />
            </div>
            <div>
                <br />
                <Button type="submit" value="SignUp">Sign Up!</Button>
            </div>
        </Form>
        </div>
    )
}

export default SignUp;