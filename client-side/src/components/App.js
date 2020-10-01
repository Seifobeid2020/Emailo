import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";

const SurveyNew = () => <h2>SurveyNew</h2>;

const notFound = () => <h2>Not Found</h2>;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pray: {
        fajer: "",
        shoroq: "",
        zohor: "",
        aser: "",
        magreb: "",
        isha: "",
      },
    };
  }
  componentDidMount() {
    this.props.fetchUser();
    this.Dashboard();
  }
  Dashboard = async () => {
    let result = "";
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://shobiddak.com/prayers/prayer_today.json";
    const pray = fetch(proxyUrl + targetUrl)
      .then((blob) => blob.json())
      .then((data) => {
        this.setState({ ...this.state, pray: data });
      });

    // console.log("this is result : " + result);
    // const prayRes = await axios.get(proxyUrl + targetUrl);
    // const data = prayRes.json();
    // console.table(data);

    // console.log(prayRes.data);
    // return (
    //   <div>
    //     <h1>fajer {result.fajer}</h1>
    //     <h1>shoroq {result.shoroq}</h1>
    //     <h1>zohor {result.zohor}</h1>
    //     <h1>aser {result.aser}</h1>
    //     <h1>magreb {result.magreb}</h1>
    //     <h1>isha {result.isha}</h1>
    //   </div>
    // );
  };
  DashboardShow = () => {
    const { pray } = this.state;
    return (
      <div>
        <h1>fajer {pray.fajer}</h1>
        <h1>shoroq {pray.shoroq}</h1>
        <h1>zohor {pray.zohor}</h1>
        <h1>aser {pray.aser}</h1>
        <h1>magreb {pray.magreb}</h1>
        <h1>isha {pray.isha}</h1>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.StrictMode>
            <div className="container">
              <Header />

              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={this.DashboardShow} />
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
