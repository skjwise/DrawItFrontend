import React from 'react';
import {Button, Grid, Icon } from "semantic-ui-react";

const LikeCount = (props) => {

    
    return (
        <Grid centered>
        <Button
          compact
          content= {props.likes}
          icon={{ color: props.heartColor, name: "like" }}
          label={{ as: "a", basic: true, content: props.username}}
          labelPosition="left"
          onClick={props.handleClick}
          style={{ padding: "5px", margin: "5px"}}
        />
       
      </Grid>
    );
}

export default LikeCount;
