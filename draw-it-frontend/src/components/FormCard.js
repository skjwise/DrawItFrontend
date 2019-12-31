import React from "react";
import { Form, Label, Card, Button } from "semantic-ui-react";

const FormCard = props => {
  return (
    <Card
      centered
      style={{
        height: "75%",
        width: "40%",
        padding: "10px",
        margin: "10px",
        color: "darkviolet"
      }}
    >
      <h3
        style={{
          textAlign: "center"
        }}
      >
        {" "}
        {props.title}
      </h3>
      <Form>
        <Form.Field inline>
          <Label pointing="right" as='a' tag > Username:</Label>
          <input type="text" name="username" placeholder="Username" />
        </Form.Field>
       

        <Form.Field inline>
          <Label pointing="right" as='a' tag >Password:</Label>
          <input type="password" name="password" placeholder="Password" />
        </Form.Field>
     

        {props.signUp && <Form.Field inline>
          <Label pointing="right" as='a' tag >Password:</Label>
          <input
            type="password"
            name="password"
            placeholder="Password confirmation"
          />
        </Form.Field> }
       

        <Button type="submit" value="SignUp" basic color="purple" style = {{textAlign: "center"}}>
          {props.title}
        </Button>
      </Form>
    </Card>
  );
};

export default FormCard;
