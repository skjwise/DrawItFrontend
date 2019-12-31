import React from "react";
import CanvasDraw from "react-canvas-draw";

import LikeCount from "./LikeCount";
import { Card } from "semantic-ui-react";

class DrawingCard extends React.Component {
  state = {
    heartColor: "grey",
    heartShape: "heart outline",
    likes: 0
  };

  handleClick = () => {
    let heartColor;
    let likes;

    if (this.state.heartColor === "grey") {
      likes = this.state.likes + 1;
      heartColor = "red";
    } else {
      likes = this.state.likes - 1;
      heartColor = "grey";
    }

    this.setState({ heartColor, likes });
  };
  
  render() {
    const { drawing, username, likes } = this.props;
    return (
      <Card style={{ height: "250px", width: "250px", margin: "10px" }}>
        <CanvasDraw
          disabled
          hideGrid
          loadTimeOffset= {0}
          canvasWidth= {250}
          canvasHeight= {250}
          lazyRadius={5}
          brushRadius = {5}
          catenaryColor="white"
          immediateLoading = {true}
          
          saveData = {drawing}
        
        />
        <LikeCount
          username={username}
          handleClick={this.handleClick}
          heartColor={this.state.heartColor}
          likes={this.state.likes}
        />
      </Card>
    );
  }
}

export default DrawingCard;
