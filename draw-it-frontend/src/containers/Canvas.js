import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

// dropdown selected attribute to disply colors on the left-hand side of the Canvas Page?
import { Card, Grid, Button } from "semantic-ui-react";
import { CirclePicker } from "react-color";
import fetchAPI from "../adapters/fetchAPI";

export class Canvas extends Component {
  state = {
    brushColor: "darkviolet",
    brushRadius: 3,
    saved: false,
    canvasSize: 400
  };

  saveDrawing = () => {
    this.setState({ saved: true });
    console.log(this.saveableCanvas.getSaveData())
    fetchAPI.createDrawings(this.saveableCanvas.getSaveData())
    // .then(d => console.log(d.drawing, d))
    .then(drawing =>
      this.props.saveDrawing(drawing)
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
          <p>Pick your colours!</p>
          <CirclePicker
            color={this.state.brushColor}
            onChangeComplete={this.handleChangeComplete}
          />
          
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
          {this.state.saved === false ? (
            <Button
              basic
              color="purple"
              content="Save drawing"
              onClick={this.saveDrawing}
            />
          ) : (

            <Button content="Drawing saved" />

          )}
          
          <Button
              basic
              color="purple"
              content="New drawing"
              onClick={() => this.saveableCanvas.clear()}
            />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Canvas;
