import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

import { Card, Grid, Button } from "semantic-ui-react";
import API from "../adapters/API";

export class Canvas extends Component {
  state = {
    brushColor: "lightblue",
    brushRadius: 5,
    saved: false
  };

  saveDrawing = () => {
    this.setState({ saved: true });
    API.createDrawings(this.saveableCanvas.getSaveData()).then(d => console.log(d.drawing.url))
  };

  handleExportClick = () => {};

  render() {
    return (
      <Grid stackable centered>
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
            Current Category: Elephant
          <Card style={{ height: "90%", width: "90%", margin: "20px" }}>
            <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              canvasWidth="100%"
              // canvasHeight="75%"
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
