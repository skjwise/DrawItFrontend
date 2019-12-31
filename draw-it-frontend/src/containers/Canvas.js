import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";


// dropdown selected attribute to disply colors on the left-hand side of the Canvas Page?
import { Card, Grid, Button } from "semantic-ui-react";
import { CirclePicker } from "react-color";
import API from "../adapters/fetchAPI";

export class Canvas extends Component {
  state = {
    brushColor: "lightblue",
    brushRadius: 1,
    saved: false,
    canvasSize: 400
  };

  saveDrawing = () => {
    this.setState({ saved: true });
    API.createDrawings(this.saveableCanvas.getSaveData()).then(d =>
      console.log(d.drawing.url)
    );
  };

  handleChangeComplete = color => {
    this.setState({ brushColor: color.hex });
  };

  componentDidMount() {
    // const canvasSize = this.card.offsetWidth;
    // console.log(canvasSize)
    const canvasSize = document.querySelector("#card").offsetWidth;
    this.setState({ canvasSize });
  }

  render() {
    return (
      <Grid stackable>
        <Grid.Column width={6}>
          <br />
          <p>colours</p>
          <CirclePicker
            color={this.state.brushColor}
            onChangeComplete={this.handleChangeComplete}
          />
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
        <Grid.Column width={10}>
          Current Category: Elephant
          <Card
            id="card"
            // ref={card => (this.card = card)}
            style={{ height: this.state.canvasSize, width: "75%" }}
          >
            <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              lazyRadius={0}
              brushRadius={this.state.brushRadius}
              brushColor={this.state.brushColor}
              catenaryColor={this.state.brushColor}
              canvasWidth={this.state.canvasSize}
              canvasHeight={this.state.canvasSize}
              gridColor="white"
            />
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Canvas;
