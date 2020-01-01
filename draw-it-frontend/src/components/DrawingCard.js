import React from "react";
import CanvasDraw from "react-canvas-draw";

import LikeCount from "./LikeCount";
import { Card } from "semantic-ui-react";
import fetchAPI from "../adapters/fetchAPI";

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
      heartColor = "purple";
    } else {
      likes = this.state.likes - 1;
      heartColor = "grey";
    }
    fetchAPI
      .addLike(this.props.id, likes)
      .then(this.setState({ heartColor, likes }))
      .then(this.props.updateLikes(this.props.id, likes))
      .then(this.props.defineAllDrawingsAndMostLikedDrawing());
  };

  componentDidMount() {
    const likes = this.props.likes ? this.props.likes : 0;
    this.setState({ likes });
  }

  render() {
    const { drawing, username } = this.props;
    return (
      <Card style={{ height: "285px", width: "250px", margin: "30px" }}>
        <CanvasDraw
          disabled
          hideGrid
          loadTimeOffset={0}
          canvasWidth={250}
          canvasHeight={250}
          lazyRadius={5}
          brushRadius={5}
          catenaryColor="white"
          immediateLoading={false}
          saveData={drawing}
        />

        <LikeCount
          username={username}
          handleClick={this.handleClick}
          heartColor={this.state.heartColor}
          likes={this.state.likes}
          id={this.props.id}
        />
      </Card>
    );
  }
}

export default DrawingCard;
