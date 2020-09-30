import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
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
        return (
          <li>
            <a href="/auth/google"> Login with Google </a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments />
            </li>
            <li>Credits: {this.props.auth.credits}</li>
            <li>
              <a href="/api/logout">Log Out</a>
            </li>
          </React.Fragment>
        );
    }
  }
  render() {
    console.log("this is props : " + JSON.stringify(this.props));
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            SEmail
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li> */}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
