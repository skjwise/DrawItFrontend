import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

export class Navbar extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
    //   <Segment  color="teal">
        <Menu  pointing secondary color="purple">
          <Menu.Item
            name="all drawings"
            as={NavLink}
            exact
            to="/alldrawings"
            active={activeItem === "allDrawings"}
            onClick={this.handleItemClick}
            
          />
          <Menu.Item
            name="my drawings"
            as={NavLink}
            exact
            to="/mydrawings"
            active={activeItem === "myDrawings"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="draw it!"
            as={NavLink}
            exact
            to="/canvas"
            active={activeItem === "canvas"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="login"
            as={NavLink}
            exact
            to="/login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="sign up"
            as={NavLink}
            exact
            to="/signup"
            active={activeItem === "signUp"}
            onClick={this.handleItemClick}
          />
        </Menu>
    //  </Segment>
    );
  }
}

export default Navbar;
