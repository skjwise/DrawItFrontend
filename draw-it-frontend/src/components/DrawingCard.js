import React from "react";
import LikeCount from "./LikeCount";
import { Card } from "semantic-ui-react";

class DrawingCard extends React.Component {
  state = {
    heartColor: "white",
    heartShape: "heart outline",
    likes: 0
  };

  handleClick = () => {
    let heartColor;
    let likes;

    if (this.state.heartColor === "white") {
      likes = this.state.likes + 1;
      heartColor = "red";
    } else {
      likes = this.state.likes - 1;
      heartColor = "white";
    }

    this.setState({ heartColor, likes });
  };

  render() {
    const { drawing, username, likes } = this.props;
    return (
     
        <Card style={{ height: "275px", width: "250px", margin: "10px" }}>
          <img
            src="./elephant.png"
            alt="elephant"
            style={{ height: "250px", width: "250px" }}
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
