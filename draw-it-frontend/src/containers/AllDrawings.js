import React from "react";
import { Grid } from "semantic-ui-react";
import DrawingCard from "../components/DrawingCard";

const AllDrawings = ({
  updateLikes,
  allDrawings,
  mostLikedDrawing,
  defineAllDrawingsAndMostLikedDrawing
}) => {
  return (
    <Grid centered>
      <Grid.Row columns={1}>
        {mostLikedDrawing === undefined ? (
          defineAllDrawingsAndMostLikedDrawing()
        ) : (
          <DrawingCard
            key={mostLikedDrawing.id}
            id={mostLikedDrawing.id}
            username={mostLikedDrawing.user.username}
            drawing={mostLikedDrawing.url}
            likes={mostLikedDrawing.number_of_likes}
            defineAllDrawingsAndMostLikedDrawing={
              defineAllDrawingsAndMostLikedDrawing
            }
            allDrawings={allDrawings}
            updateLikes={updateLikes}
          />
        )}
      </Grid.Row>
      <Grid.Row columns={4}>
        {allDrawings.map(drawing => (
          <DrawingCard
            key={drawing.id}
            id={drawing.id}
            username={drawing.user.username}
            drawing={drawing.url}
            likes={drawing.number_of_likes}
            defineAllDrawingsAndMostLikedDrawing={
              defineAllDrawingsAndMostLikedDrawing
            }
            allDrawings={allDrawings}
            updateLikes={updateLikes}
          />
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default AllDrawings;
