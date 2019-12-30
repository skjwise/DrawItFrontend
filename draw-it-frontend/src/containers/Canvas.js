import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import CanvasDraw from "react-canvas-draw";

export class Canvas extends Component {
  state = {
    brushColor: "lightblue",
    brushRadius: 5,
    saved: false
  };

  saveDrawing = () => {
    this.setState({ saved: true });
    fetch("http://localhost:3000/drawings", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_id: 1, url: this.saveableCanvas.getSaveData()})
  }).then(console.log)
  
  };

  handleExportClick = () => {};

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <br />
          <p>colours</p>
          {this.state.saved === false ? (
            <Button
              basic
              color="teal"
              content="Save drawing"
              onClick={this.saveDrawing}
            />
          ) : (
            <Button content="Drawing saved" />
          )}
        </Grid.Column>
        <Grid.Column width={12}>
          <Card style={{ height: "500px", width: "500px", margin: "20px" }}>
            <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              canvasWidth={500}
              canvasHeight={500}
              lazyRadius={0}
              brushRadius={this.state.brushRadius}
              brushColor={this.state.brushColor}
              catenaryColor={this.state.brushColor}
              gridColor="white"
            />
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Canvas;
