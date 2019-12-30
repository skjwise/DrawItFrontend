import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import CanvasDraw from "react-canvas-draw";

export class Canvas extends Component {

  state = {
    brushColor: "lightblue",
    brushRadius: 5,
    saved: false
  }


  render() {
    return (
   
        <Grid>
          <Grid.Column width={4}> 
          <br />
          <p>colours</p>
          <Button />
          </Grid.Column>
          <Grid.Column width={12}>
            <Card style={{ height: "500px", width: "500px", margin: "20px" }}>
              <CanvasDraw
                canvasWidth={500}
                canvasHeight={500}
                lazyRadius={0}
                brushRadius={this.state.brushRadius}
                brushColor= {this.state.brushColor}
                catenaryColor=  {this.state.brushColor}
                gridColor= "white"
              />
            </Card>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Canvas;
