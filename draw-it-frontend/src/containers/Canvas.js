import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

import { Card, Grid, Button, Label, Icon } from "semantic-ui-react";
import { CirclePicker } from "react-color";
import { Slider } from "react-semantic-ui-range";
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
    console.log(this.saveableCanvas.getSaveData());
    fetchAPI
      .createDrawings(this.props.user.username, this.saveableCanvas.getSaveData())
      .then(drawing => this.props.saveDrawing(drawing));
  };

  handleChangeComplete = color => {
    this.setState({ brushColor: color.hex });
  };

  handleClick = () => {
    this.saveableCanvas.clear();
    this.setState({ saved: false });
  };

  onSizeChangeComplete = e => {
    let value = parseInt(e.target.value);
    if (!value) {
      value = 0;
    }
    this.setState({ brushRadius: e.target.value });
  };

  sizeChange = value => {
    this.setState({ brushRadius: value });
  };

  componentDidMount() {
    // const canvasSize = this.card.offsetWidth;
    // console.log(canvasSize)
    const canvasSize = document.querySelector("#card").offsetWidth;
    this.setState({ canvasSize });
  }

  render() {
    const settings = {
      start: 3,
      min: 0,
      max: 100,
      step: 1,
      onChange: value => {
        this.setState({ brushRadius: value });
      }
    };
    return (
      <Grid stackable>
        <Grid.Column width={6}>
          <br />
          <br />
          <Label as="a" color="purple" tag>
            Pick your colours
          </Label>
          <br />
          <br />
          <br />
          <CirclePicker
            color={this.state.brushColor}
            onChangeComplete={this.handleChangeComplete}
          />
          <br />
          <br />
          <Label as="a" color="purple" tag>
            Pick your brush size
          </Label>
          <br />
          <br />
          <Slider
            value={this.state.brushRadius}
            color="purple"
            onChange={this.onSizeComplete}
            settings={settings}
            style={{ width: "90%" }}
          />
          <br />
          <br />
          
          {this.state.saved === false ? (
            <Button
              basic
              color="purple"
              content="Save drawing"
              onClick={this.saveDrawing}
              
            />
          ) : (
            <Button content="Drawing saved"  />
          )}
          
          
        </Grid.Column>
        <Grid.Column width={10}>
          <br />
          <br />
          <Label as="a" color="purple" tag>
            Draw something here!
          </Label>
          <br />
          <br />
          

          <Card
            id="card"
            // ref={card => (this.card = card)}
            label={{ as: "a", corner: "left", icon: "heart" }}
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
          <Icon
            onClick={this.handleClick}
            name="trash"
            color="purple"
            size="large"
          />
          <Icon
            onClick={() => this.saveableCanvas.undo()}
            name="undo alternate"
            color="purple"
            size="large"
          />

        </Grid.Column>
      </Grid>
    );
  }
}

export default Canvas;
