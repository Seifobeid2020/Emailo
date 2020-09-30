import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const notFound = () => <h2>Not Found</h2>;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <React.StrictMode>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
                <Route exact path="/404" component={notFound} />
                {/* <Redirect to="/404" /> */}
              </Switch>
            </div>
          </React.StrictMode>
        </Router>
      </React.Fragment>
    );
  }
}

export default connect(null, actions)(App);
