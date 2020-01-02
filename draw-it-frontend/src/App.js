<<<<<<< HEAD
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
import Home from "./components/Home";
import fetchAPI from "./adapters/fetchAPI";

=======
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
>>>>>>> 523a1fc217ea9afb582e64ee17f5c49ae65cb859

function App() {
  // this.state = {
  //   allDrawingsAndUsers: []
  // };

<<<<<<< HEAD
class App extends React.Component {
  state = {
    allDrawings: [],
    mostLikedDrawing: ""
  };

  getDrawings() {
    fetchAPI.getDrawings()
      .then(drawings => this.setState({ allDrawings: drawings.drawings }))
      .then(this.defineAllDrawingsAndMostLikedDrawing());
  }

  saveDrawing = drawing => {
    this.setState({ allDrawings: [...this.state.allDrawings, drawing] });
  };

  defineAllDrawingsAndMostLikedDrawing = () => {
    const allDrawings = [...this.state.allDrawings];

    const sortedDrawings = allDrawings.sort(
      (a, b) => b.number_of_likes - a.number_of_likes
    );

    const mostLikedDrawing = sortedDrawings[0];
    console.log(mostLikedDrawing);

    this.setState({ mostLikedDrawing });
  };

  filterDrawings = () => {
    const allDrawings = [...this.state.allDrawings];
    if (this.state.mostLikedDrawing) {
      return allDrawings.filter(
        drawing => drawing.id !== this.state.mostLikedDrawing.id
      );
    } else {
      return this.state.allDrawings;
    }
  };

  updateLikes = (id, likes) => {
    const allDrawings = this.state.allDrawings.map(drawing =>
      drawing.id === id ? { ...drawing, number_of_likes: likes } : drawing
    );
    this.setState({ allDrawings });
  };
=======
 const [user, setUser] = useState(null);

 useEffect(() => {
  API.validateUser()
  .then(user => setUser(user))
  .catch(console.error);
 }, []);

  const handleSignup = () => {}
>>>>>>> 523a1fc217ea9afb582e64ee17f5c49ae65cb859

  const handleLogin = loginData => {
    API.login(loginData).then(user => setUser(user));
  }

<<<<<<< HEAD
  render() {
=======
  const handleSubmit = () => {
    console.log("login button or signup button clicked")
      // {!user ? ( <SignUp /> ) : (<Canvas />)}
  }

    // const { allDrawingsAndUsers } = this.state;
>>>>>>> 523a1fc217ea9afb582e64ee17f5c49ae65cb859
    return (
      <div className="background" >
        
        <Router>
<<<<<<< HEAD
          <Navbar />
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/canvas"
              render={props => (
                <Canvas {...props} saveDrawing={this.saveDrawing} />
              )}
            />
            <Route
              exact
              path="/alldrawings"
              render={props => (
                <AllDrawings
                  {...props}
                  allDrawings={this.filterDrawings()}
                  mostLikedDrawing={this.state.mostLikedDrawing}
                  defineAllDrawingsAndMostLikedDrawing={
                    this.defineAllDrawingsAndMostLikedDrawing
                  }
                  updateLikes={this.updateLikes}
                />
              )}
            />
            <Route
              exact
              path="/mydrawings"
              render={props => <MyDrawings {...props} />}
            />
          </Container>
=======
        <Navbar />
        <Container>
          {user && <span>Hello, {user.username}! </span>}
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
>>>>>>> 523a1fc217ea9afb582e64ee17f5c49ae65cb859
        </Router>

        
      </div>
    );
}

export default App;
