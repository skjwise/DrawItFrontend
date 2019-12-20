import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'lightblue',
    textDecoration: 'none',
    color: 'darkblue',
  }

export class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink 
                to = "/alldrawings"
                exact
                style={link}
                activeStyle = {{background: 'lightblue'}}
                > All Drawings </NavLink>

                <NavLink 
                to = "/mydrawings"
                exact
                style={link}
                activeStyle = {{background: 'lightblue'}}
                > My Drawings </NavLink>

                <NavLink 
                to = "/canvas"
                exact
                style={link}
                activeStyle = {{background: 'lightblue'}}
                > Draw It</NavLink>

                <NavLink 
                to = "/login"
                exact
                style={link}
                activeStyle = {{background: 'lightblue'}}
                > Login </NavLink>
                
            </div>
        );
    }
}

export default Navbar;
