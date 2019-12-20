import React from 'react';
import { Grid } from "semantic-ui-react";
import DrawingCard from '../components/DrawingCard';

const AllDrawings = ({allDrawings}) => {
  return (
    <Grid>
      <Grid.Row>
        <DrawingCard username= "sarah" />
      </Grid.Row>
      <Grid.Row>
      {allDrawings.map(drawing => <DrawingCard key = {drawing.id} username = {drawing.user.username} drawing = {drawing.url}/>)}
      </Grid.Row>
    </Grid>
  );
}

export default AllDrawings;
