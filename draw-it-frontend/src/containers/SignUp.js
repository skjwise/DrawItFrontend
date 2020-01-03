import React, {useState} from 'react';
import FormCard from '../components/FormCard';
import {Button, Form } from 'semantic-ui-react';
import { signUp } from "../adapters/API";


const SignUp = (props) => {
    const [signupData, setSignupData] = useState({});

    const handleSignupChange = e => {
      setSignupData({
        ...signupData,
        [e.target.name]: e.target.value
      })
    };
  
    const handleSignupSubmit = e => {
      e.preventDefault();
      signUp(signupData).then(props.onSuccess)
    }

    return (
        <div> 
        <br/>
          <br/>
          <br/>
          <h3> Please Enter Details below to Sign Up: </h3>
        <Form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="Username" onChange={handleSignupChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password" onChange={handleSignupChange} />
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" name="password" placeholder="Confirm Password" onChange={handleSignupChange} />
            </div>
            <div>
                <br />
                <Button onClick={handleSignupSubmit} type="submit" value="SignUp">Sign Up!</Button>
            </div>
        </Form>
        </div> 
        // <FormCard title= "Sign Up!" signUp = {true} handleSubmit = {props.handleSubmit}/>
    )
}

export default SignUp;