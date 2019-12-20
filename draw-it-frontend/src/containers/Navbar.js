import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// add style function here

export class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink 
                to = "/alldrawings"
                exact
                activeStyle = {{background: 'lightblue'}}
                > All Drawings </NavLink>

                <NavLink 
                to = "/mydrawings"
                exact
                activeStyle = {{background: 'lightblue'}}
                > My Drawings </NavLink>

                <NavLink 
                to = "/canvas"
                exact
                activeStyle = {{background: 'lightblue'}}
                > Draw It</NavLink>


                <NavLink 
                to = "/login"
                exact
                activeStyle = {{background: 'lightblue'}}
                > Login </NavLink>
                
            </div>
        );
    }
}

export default Navbar;
