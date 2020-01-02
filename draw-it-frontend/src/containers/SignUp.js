import React from 'react';
import FormCard from '../components/FormCard';
import {Button, Form } from 'semantic-ui-react';

const SignUp = (props) => {
    return (
        
        /* <br/>
          <br/>
          <br/>
          <h3> Please Enter Details below to Sign Up: </h3>
        <Form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" name="password" placeholder="Confirm Password" />
            </div>
            <div>
                <br />
                <Button onClick={props.handleSubmit} type="submit" value="SignUp">Sign Up!</Button>
            </div>
        </Form>
        </div> */
        <FormCard title= "Sign Up!" signUp = {true} handleSubmit = {props.handleSubmit}/>
    )
}

export default SignUp;