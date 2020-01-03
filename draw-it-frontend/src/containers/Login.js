import React, {useState} from 'react';

import FormCard from '../components/FormCard';
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
    e.preventDefault()
    login(loginData).then(props.onSuccess)
  }


    return (

      <FormCard title= "Login below!"  button = "Login" handleSubmit = {handleLoginSubmit} onChange={handleLoginChange}/>
  
    )
  }


  export default Login;