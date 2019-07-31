
import React, { Component } from "react";
import {
MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { withRouter, Link} from 'react-router-dom'

class Topbar extends Component {
  constructor(props)
  {
    super(props)
this.state = {
  isOpen: false
};
  }
  logout=()=>
{
  localStorage.removeItem('Password')
  console.log(this.props)
 
this.props.history.push('/loginpage')
}
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/register">Register Form List</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/register-form">Create Register Form</MDBNavLink>
            </MDBNavItem>
           
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />

                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          <button className="btn blue-gradient btn-rounded" onClick={this.logout} type="button">
             Logout
          </button> 
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default withRouter(Topbar);