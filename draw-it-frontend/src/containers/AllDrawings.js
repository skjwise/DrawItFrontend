import React from "react";
import { Grid, Divider, Label, Segment } from "semantic-ui-react";
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
        <Grid.Column width={6}>
          {mostLikedDrawing === undefined ? (
            defineAllDrawingsAndMostLikedDrawing()
          ) : (
            <Segment raised>
              <Label as="a" color = "purple" ribbon>
                Most Popular Drawing:
              </Label>
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
            </Segment>
          )}
        </Grid.Column>
      </Grid.Row>
      <Divider />
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
      <Divider />
    </Grid>
  );
};

export default AllDrawings;
