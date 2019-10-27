import ReactDOM from "react-dom";
import React, { Component } from "react";
import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer
} from "../styles/Base";

export default class App extends Component {
  // static state = { "0": { title: "hello", completed: "false" } };
  state = { title: "hello", completed: "false" };
  static url = "https://jsonplaceholder.typicode.com/todos";
  render() {
    return (
      <MovableCardWrapper>
        <CardHeader> {this.state.title} </CardHeader>
        <Detail>hELLO</Detail>
        <Footer />
      </MovableCardWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
