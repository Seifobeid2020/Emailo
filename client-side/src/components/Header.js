import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { Navbar, Form, Nav, NavDropdown } from "react-bootstrap";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Nav.Link href="/auth/google">Login with Google </Nav.Link>;
      default:
        return (
          <React.Fragment>
            <Nav.Content>
              {" "}
              <Payments />
            </Nav.Content>
            <Nav.Content> Credits: {this.props.auth.credits}</Nav.Content>

            <Nav.Link href="/api/logout">Log Out </Nav.Link>
          </React.Fragment>
        );
    }
  }
  render() {
    console.log("this is props : " + JSON.stringify(this.props));
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            SEmail
          </Link>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {this.renderContent()}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>

      // <nav>
      //   <div className="nav-wrapper">
      //     <Link
      //       to={this.props.auth ? "/surveys" : "/"}
      //       className="left brand-logo"
      //     >
      //       SEmail
      //     </Link>
      //     <ul id="nav-mobile" className="right hide-on-med-and-down">
      //       {/* <li>
      //         <a href="sass.html">Sass</a>
      //       </li>
      //       <li>
      //         <a href="badges.html">Components</a>
      //       </li>
      //       <li>
      //         <a href="collapsible.html">JavaScript</a>
      //       </li> */}
      //       {this.renderContent()}
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
