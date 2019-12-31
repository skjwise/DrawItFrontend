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
    allDrawings: []
  };

  getDrawings() {
    API.getDrawings()
      .then(allDrawingsAndUsers =>
        this.setState({
          allDrawings: allDrawingsAndUsers.drawings
        })
      );
  }

  saveDrawing = drawing => {
    this.setState({ allDrawings: [...this.state.allDrawings, drawing]})
  }

  componentDidMount() {
    this.getDrawings();
  }

  render() {
    const { allDrawings} = this.state;
    return (
      <div className="background">
        <Router>
        <Navbar />
        <Container>
          <Route exact path="/signup" component = {SignUp} />
          <Route exact path="/login" component = {Login}/>
          <Route exact path="/canvas" render={(props) => (<Canvas {...props} saveDrawing = {this.saveDrawing}/>)}/>
          <Route
          exact
          path="/alldrawings"
          render={(props) => (<AllDrawings {...props} allDrawings = {allDrawings}/>)}
          />
          <Route exact path="/mydrawings" render={(props) => (<MyDrawings {...props} />)}/>
        </Container>
        </Router>
      </div>
    );
  }
}

export default App;
