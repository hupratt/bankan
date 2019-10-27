import ReactDOM from "react-dom";
import React, { Component, Fragment } from "react";
import Posts from "./posts/Posts";
import { Provider } from "react-redux";
import store from "../store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Posts />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
