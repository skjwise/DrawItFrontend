import React, { useState, useEffect } from "react";
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
import API from "./adapters/API";

function App() {
  const [user, setUser] = useState(null);
  const [allDrawings, setAllDrawings] = useState([]);
  const [mostLikedDrawing, setMostLikedDrawing] = useState("");
  const [startingValue, setStartingValue] = useState(0);

  const getDrawings = () => {
    fetchAPI
      .getDrawings()
      .then(drawings => setAllDrawings(drawings.drawings))
      .then(defineCurrentDrawings())
      .then(defineAllDrawingsAndMostLikedDrawing());
  };

  const defineCurrentDrawings = () => {
    const endValue = startingValue + 15;
    const copyAllDrawings = filterDrawings();
    return copyAllDrawings.slice(startingValue, endValue);
  };

  const getMoreDrawings = operator => {
    let newValue;
    if (operator === "plus") {
      newValue = startingValue + 15;
    } else {
      newValue = startingValue - 15;
    }
    const newStartingValue = (newValue) % allDrawings.length;
    setStartingValue(newStartingValue);
  };

  const saveDrawing = drawing => {
    setAllDrawings([drawing, ...allDrawings ]);
  };

  const defineAllDrawingsAndMostLikedDrawing = () => {
    const copyAllDrawings = [...allDrawings];

    const sortedDrawings = copyAllDrawings.sort(
      (a, b) => b.number_of_likes - a.number_of_likes
    );

    const mostLikedDrawing = sortedDrawings[0];
    console.log(mostLikedDrawing);

    setMostLikedDrawing(mostLikedDrawing);
  };

  const filterDrawings = () => {
    const copyAllDrawings = [...allDrawings];
    if (mostLikedDrawing) {
      return copyAllDrawings.filter(
        drawing => drawing.id !== mostLikedDrawing.id
      );
    } else {
      return copyAllDrawings;
    }
  };

  const updateLikes = (id, likes) => {
    const drawings = allDrawings.map(drawing =>
      drawing.id === id ? { ...drawing, number_of_likes: likes } : drawing
    );
    setAllDrawings(drawings);
  };

  useEffect(() => {
    getDrawings();
    API.validateUser()
      .then(user => setUser(user))
      .catch(console.error);
  }, []);

<<<<<<< HEAD
 useEffect(() => {
   getDrawings()
  API.validateUser()
  .then(user => setUser(user))
  .catch(console.error);
 }, []);

  // const handleSignup = () => {}

  const handleLogin = loginData => {
    API.login(loginData).then(user => setUser(user));
  }
  // const handleSubmit = () => {
  //   console.log("login button or signup button clicked")
  //     // {!user ? ( <SignUp /> ) : (<Canvas />)}
  // }

    // const { allDrawingsAndUsers } = this.state;

    return (
      <div className="background" >
        
        <Router>
          <Navbar />
          <Container style = {{align: "inline-block"}}>
            <Route exact path="/" component={Home} />
            {user && <span>Hello, {user.username}! </span>}
          <Route exact path="/signup" render={(props) => (<SignUp {...props} signup={handleLogin} />)} />
          <Route exact path="/login" render= {(props) => (<Login {...props} login={handleLogin} />)} />
          
            <Route
              exact
              path="/canvas"
              render={props => (
                <Canvas {...props} saveDrawing={saveDrawing} />
              )}
            />
            <Route
              exact
              path="/alldrawings"
              render={props => (
                <AllDrawings
                  {...props}
                  allDrawings={filterDrawings()}
                  mostLikedDrawing={mostLikedDrawing}
                  defineAllDrawingsAndMostLikedDrawing={
                    defineAllDrawingsAndMostLikedDrawing
                  }
                  updateLikes={updateLikes}
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
=======
  const handleSignup = () => {};

  const handleLogin = loginData => {
    API.login(loginData).then(user => setUser(user));
  };
  const handleSubmit = () => {
    console.log("login button or signup button clicked");
    // {!user ? ( <SignUp /> ) : (<Canvas />)}
  };

  // const { allDrawingsAndUsers } = this.state;

  return (
    <div className="background">
      <Router>
        <Navbar />
        <Container>
          <Route exact path="/" component={Home} />
          {user && <span>Hello, {user.username}! </span>}
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUp
                {...props}
                signup={handleSignup}
                handleSubmit={handleSubmit}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                login={handleLogin}
                handleSubmit={handleSubmit}
              />
            )}
          />

          <Route
            exact
            path="/canvas"
            render={props => <Canvas {...props} saveDrawing={saveDrawing} user= {user}/>}
          />
          <Route
            exact
            path="/alldrawings"
            render={props => (
              <AllDrawings
                {...props}
                allDrawings={defineCurrentDrawings()}
                mostLikedDrawing={mostLikedDrawing}
                defineAllDrawingsAndMostLikedDrawing={
                  defineAllDrawingsAndMostLikedDrawing
                }
                updateLikes={updateLikes}
                getMoreDrawings={getMoreDrawings}
                startingValue = {startingValue}
              />
            )}
          />
        </Container>
      </Router>
    </div>
  );
>>>>>>> e038e519a69f6d01c3febfd98e8b390798bb6e01
}

export default App;
