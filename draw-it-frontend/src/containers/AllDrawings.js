import React from "react";
import { Grid, Divider, Label, Segment, Icon } from "semantic-ui-react";
import DrawingCard from "../components/DrawingCard";

const AllDrawings = ({
  updateLikes,
  allDrawings,
  mostLikedDrawing,
  defineAllDrawingsAndMostLikedDrawing,
  getMoreDrawings,
  startingValue
}) => {
  return (
    <React.Fragment>
      <br />
      <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column width={6}>
            <Grid centered>
              {mostLikedDrawing === undefined || mostLikedDrawing === "" ? (
                defineAllDrawingsAndMostLikedDrawing()
              ) : (
                <Segment raised>
                  <Label as="a" color="purple" ribbon>
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
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          {startingValue !== 0 && (
            <Icon
              onClick={() => getMoreDrawings("minus")}
              name="chevron circle left"
              color="purple"
              size="large"
            />
          )}
          <Icon
            onClick={() => getMoreDrawings("plus")}
            name="chevron circle right"
            color="purple"
            size="large"
          />
        </Grid.Row>
        <Grid.Row columns={5}>
          {allDrawings.map(drawing =>
            drawing === undefined ? (
              <p> Drawing is loading</p>
            ) : (
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
            )
          )}
        </Grid.Row>
        <Grid.Row>
          {startingValue !== 0 && (
            <Icon
              onClick={() => getMoreDrawings("minus")}
              name="chevron circle left"
              color="purple"
              size="large"
            />
          )}
          <Icon
            onClick={() => getMoreDrawings("plus")}
            name="chevron circle right"
            color="purple"
            size="large"
          />
        </Grid.Row>
        <Divider />
      </Grid>
    </React.Fragment>
  );
};

export default AllDrawings;
