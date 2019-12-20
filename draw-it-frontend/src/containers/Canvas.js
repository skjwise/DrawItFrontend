import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import CanvasDraw from "react-canvas-draw";

export class Canvas extends Component {
  render() {
    return (
   
        <Grid>
          <Grid.Column width={4}> 
          <br />
          <p>colours</p>
          </Grid.Column>
          <Grid.Column width={12}>
            <Card style={{ height: "500px", width: "500px", margin: "20px" }}>
              <CanvasDraw
                canvasWidth={500}
                canvasHeight={500}
                lazyRadius={0}
                brushRadius={5}
                brushColor="lightblue"
              />
            </Card>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Canvas;
