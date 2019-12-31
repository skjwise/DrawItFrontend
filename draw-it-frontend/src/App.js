import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import { Container } from "semantic-ui-react";
import AllDrawings from "./containers/AllDrawings";
import MyDrawings from "./containers/MyDrawings";
import Canvas from "./containers/Canvas";
import Navbar from "./containers/Navbar";
import API from "./adapters/fetchAPI";

import "./App.css";

class App extends React.Component {
  state = {
    allDrawingsAndUsers: []
  };

  getDrawings() {
    API.getDrawings()
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
      <div className="background">
        <Router>
        <Navbar />
        <Container>
          <Route exact path="/signup" component = {SignUp} />
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
