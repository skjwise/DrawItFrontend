import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink 
                exact to = "/alldrawings"
                activeStyle = {{fontWeight: "bold", background: 'lightblue'}}
                > All Drawings </NavLink>

                <NavLink 
                exact to = "/mydrawings"
                activeStyle = {{background: 'lightblue'}}
                > My Drawings </NavLink>

                <NavLink 
                exact to = "/canvas"
                activeStyle = {{background: 'lightblue'}}
                > Draw It</NavLink>


                <NavLink 
                exact to = "/login"
                activeStyle = {{background: 'lightblue'}}
                > Login </NavLink>
                
                <NavLink 
                exact to = "/signup"
                activeStyle = {{background: 'lightblue'}}
                > Sign Up </NavLink>
            </div>
        );
    }
}

export default Navbar;



//SEMANTIC UI NAVBAR / MENU: 


// import React, { Component } from 'react'
// import { Input, Menu } from 'semantic-ui-react'

// export default class Navbar extends Component {
//   state = { activeItem: 'Login' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu secondary>
//         <Menu.Item
//           name='Login'
//           active={activeItem === 'Login'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='alldrawings'
//           active={activeItem === 'alldrawaings'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='mydrawings'
//           active={activeItem === 'mydrawings'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Menu position='right'>
//           <Menu.Item>
//             <Input icon='search' placeholder='Search...' />
//           </Menu.Item>
//           <Menu.Item
//             name='logout'
//             active={activeItem === 'logout'}
//             onClick={this.handleItemClick}
//           />
//         </Menu.Menu>
//       </Menu>
//     )
//   }
// }