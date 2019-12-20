import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container } from "semantic-ui-react";
import AllDrawings from './containers/AllDrawings';
import MyDrawings from './containers/MyDrawings';
import Canvas from './containers/Canvas';
import Navbar from './containers/Navbar';

import "./App.css";
import Login from "./containers/Login";

const API = "http://localhost:3000/drawings";

class App extends React.Component {
  state = {
    allDrawingsAndUsers: []
  };

  getDrawings() {
    fetch(API)
      .then(res => res.json())
      .then(allDrawingsAndUsers =>
        this.setState({
          allDrawingsAndUsers
        })
      );
  }

  componentDidMount() {
    this.getDrawings();
  }

  render() {
    const { allDrawingsAndUsers } = this.state;
    return (
      <div>
        <Router>
        <Navbar/>
        <Container>
        <Route exact path="/login" component = {Login}/>
        <Route exact path="/canvas" component = {Canvas}/>
        <Route
          exact
          path="/alldrawings"
          render={(props) => (<AllDrawings {...props} allDrawings = {allDrawingsAndUsers.drawings}/>)}
        />
        <Route exact path="/mydrawings" render={(props) => (<MyDrawings {...props} />)}/>
        </Container>
        </Router>
      </div>
    );
  }
}

export default App;
