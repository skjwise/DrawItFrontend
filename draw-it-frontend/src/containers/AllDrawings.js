import React from "react";
import { Grid } from "semantic-ui-react";
import DrawingCard from "../components/DrawingCard";

const AllDrawings = ({ allDrawings}) => {
  return (
    <Grid centered >
      <Grid.Row columns={1}>
        {/* <DrawingCard username="sarah" drawing = "test" /> */}
      </Grid.Row>
      <Grid.Row columns={4}>
        {allDrawings.map(drawing => (
          <DrawingCard
            key={drawing.id}
            id={drawing.id}
            username={drawing.user.username}
            drawing={drawing.url}
            likes = {drawing.number_of_likes}
          />
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default AllDrawings;
