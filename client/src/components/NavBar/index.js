import React, { Component } from "react";
import Popover from "react-simple-popover";

import { DASHBOARD, PROFILE, TASKS } from "../../constants/routes";

import { logout } from "../../api/queries/index";
import {Collapse, Navbar, NavbarBrand} from "reactstrap";
import {MDBCollapse, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler} from "mdb-react-ui-kit";

export default class NavBar extends Component {
  state = {
    open: false,
    collapseID: ""
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  toggleCollapse = collapseID => () => {
    this.setState(state => {
      if (state.collapseID !== collapseID) {
        return { collapseID: collapseID };
      }
      return { collapseID: "" };
    });
  };

  handleLogout = () => {
    logout()
      .then(response => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Navbar className="flexible-navbar" light expand="md" scrolling>
        <NavbarBrand href="/">Landing</NavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse13")} />
        <MDBCollapse
          id="navbarCollapse13"
          isOpen={this.state.collapseID}
          navbar
        >
          <MDBNavbarNav left>
            <MDBNavbarItem>
              <MDBNavbarLink to={DASHBOARD}>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink to={PROFILE}>Profile</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink to={TASKS}>Tasks</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        <Collapse navbar>
          <MDBNavbarNav right>
            <MDBNavbarLink>
              <a
                className="nav-link navbar-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://pl-pl.facebook.com/mdbootstrap/"
              >
                {/*<Fa icon="facebook" />*/}
              </a>
            </MDBNavbarLink>
            <MDBNavbarLink>
              <a
                className="nav-link navbar-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/mdbootstrap"
              >
                {/*<Fa icon="twitter" />*/}
              </a>
            </MDBNavbarLink>

            <MDBNavbarLink>
              <div
                style={{ display: "flex", cursor: "pointer" }}
                className="nav-link navbar-link"
                rel="noopener noreferrer"
              >
                <div className="button" ref="target" onClick={this.handleClick}>
                  {/*<Fa icon="user" className="mr-2" />*/}
                </div>
                <Popover
                  placement="bottom"
                  container={this}
                  target={this.refs.target}
                  show={this.state.open}
                  onHide={this.handleClose}
                >
                  <div className="popover-items">
                    <MDBNavbarLink to={TASKS}>Tasks</MDBNavbarLink>
                    <MDBNavbarLink to={PROFILE} onClick={this.handleLogout}>
                      Log out
                    </MDBNavbarLink>
                  </div>
                </Popover>
              </div>
            </MDBNavbarLink>
          </MDBNavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}
