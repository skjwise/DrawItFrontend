import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import AllDrawings from "./containers/AllDrawings";
import MyDrawings from "./containers/MyDrawings";
import Canvas from "./containers/Canvas";
import Navbar from "./containers/Navbar";

import "./App.css";

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
      <div className="background">
        <Router>
          <Navbar />
          <Container>
            <Route
              exact
              path="/canvas"
              render={props => <Canvas {...props} />}
            />
            <Route
              exact
              path="/alldrawings"
              render={props => (
                <AllDrawings
                  {...props}
                  allDrawings={allDrawingsAndUsers.drawings}
                />
              )}
            />
            <Route
              exact
              path="/mydrawings"
              render={props => <MyDrawings {...props} />}
            />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
