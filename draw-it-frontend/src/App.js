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


import "./App.css";

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

  componentDidMount() {
    this.getDrawings();
  }

  render() {
    return (
      <div className="background" >
        
        <Router>
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
        </Router>

        
      </div>
    );
  }
}

export default App;
