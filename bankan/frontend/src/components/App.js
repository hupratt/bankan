import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "axios";

import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer
} from "../styles/Base";

export default class App extends Component {
  state = { posts: [] };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    const { posts } = this.state;
    var list = posts.map((postItem, index) => (
      <li key={index}>{postItem.title}</li>
    ));
    return <ul>{list}</ul>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
