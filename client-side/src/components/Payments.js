import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <StripeCheckout
          amount={5000}
          name="SEmail"
          description=" FOR non"
          token={(token) => this.props.handelToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn"> Add Credet</button>
        </StripeCheckout>
      </React.Fragment>
    );
  }
}

export default connect(null, actions)(Payments);
