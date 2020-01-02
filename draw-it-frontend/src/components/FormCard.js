import React from "react";
import { Form, Label, Card, Button } from "semantic-ui-react";
import { login, signUp } from "../adapters/API";

const FormCard = props => {
  
  return (
    <Card
      centered
      style={{
        height: "90%",
        width: "40%",
        padding: "10px",
        margin: "10px",
        color: "darkviolet"
      }}
    >
      <br />
      <h3
        style={{
          textAlign: "center"
        }}
      >
        {" "}
        {props.title}
      </h3>
      <Form style = {{textAlign: "center"}}>
        <Form.Field inline>
          <Label pointing="right" as='a' tag  color= "purple"> Username:</Label>
          <input type="text" name="username" placeholder="Username"  />
        </Form.Field>
       

        <Form.Field inline>
          <Label pointing="right" as='a' tag color= "purple" >Password:</Label>
          <input type="password" name="password" placeholder="Password"  />
        </Form.Field>
     

        {props.signUp && <Form.Field inline>
          <Label pointing="right" as='a' tag color= "purple" >Password:</Label>
          <input
            type="password"
            name="password"
            placeholder="Password confirmation"
          />
        </Form.Field> }
       

        <Button  type="submit" value="SignUp" basic color="purple" >
          {props.title}
        </Button>
      </Form>
      <br />
      <br />
      <br />
    </Card>
  );
};

export default FormCard;
