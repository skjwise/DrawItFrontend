import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container } from "semantic-ui-react";
import AllDrawings from './containers/AllDrawings';
import MyDrawings from './containers/MyDrawings';
import Canvas from './containers/Canvas';
import Navbar from './containers/Navbar';
import "./App.css";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import API from './adapters/API';

function App() {
  // this.state = {
  //   allDrawingsAndUsers: []
  // };

 const [user, setUser] = useState(null);

 useEffect(() => {
  API.validateUser()
  .then(user => setUser(user))
  .catch(console.error);
 }, []);

  const handleSignup = () => {}

  const handleLogin = loginData => {
    API.login(loginData).then(user => setUser(user));
  }

  const handleSubmit = () => {
    console.log("login button or signup button clicked")
      // {!user ? ( <SignUp /> ) : (<Canvas />)}
  }

    // const { allDrawingsAndUsers } = this.state;
    return (
      <div className="background">
        <Router>
        <Navbar />
        {user && <span>Hello, {user.username}! </span>}
        <Container>
          <Route exact path="/signup" render={(props) => (<SignUp {...props} signup={handleSignup} handleSubmit={handleSubmit}/>)} />
          <Route exact path="/login" render= {(props) => (<Login {...props} login={handleLogin} handleSubmit={handleSubmit} />)} />
          <Route exact path="/canvas" component = {Canvas}/>
          <Route
          exact
          path="/alldrawings"
          // render={(props) => (<AllDrawings {...props} allDrawings = {allDrawingsAndUsers.drawings}/>)}
          />
          <Route exact path="/mydrawings" render={(props) => (<MyDrawings {...props} />)}/>
        </Container>
        </Router>
      </div>
    );
}

export default App;
