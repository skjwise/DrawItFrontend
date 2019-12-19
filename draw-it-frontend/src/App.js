import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllDrawings from './containers/AllDrawings';
import MyDrawings from './containers/MyDrawings';
import Canvas from './containers/Canvas';
import Navbar from './containers/Navbar';

import "./App.css";

const API = "http://localhost:3000/drawings";

class App extends React.Component {
  state = {
    allDrawings: []
  };

  getDrawings() {
    fetch(API)
      .then(res => res.json())
      .then(allDrawings =>
        this.setState({
          allDrawings
        })
      );
  }

  componentDidMount() {
    this.getDrawings();
  }

  render() {
    const { allDrawings } = this.state;
    return (
      <div>
        <Router>
        <Navbar />
        <Route exact path="/canvas" component = {Canvas}/>
        <Route
          exact
          path="/alldrawings"
          render={(props) => (<AllDrawings {...props} allDrawings = {allDrawings}/>)}
        />
        <Route exact path="/mydrawings" render={(props) => (<MyDrawings {...props} allDrawings = {allDrawings}/>)}/>
        </Router>
      </div>
    );
  }
}

export default App;
