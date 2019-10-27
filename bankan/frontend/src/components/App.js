import ReactDOM from "react-dom";
import React, { Component, Fragment } from "react";
import Posts from "./posts/Posts";
import { CustomPopoverContainer } from "../styles/Base";

export default class App extends Component {
  render() {
    return <Posts />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
