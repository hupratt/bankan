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
  state = { posts: [] };
  componentDidMount() {
    this.setState({
      posts: [
        { title: "title-1", content: "content-1", slug: "slug-1", key: "1" },
        { title: "title-2", content: "content-2", slug: "slug-2", key: "2" }
      ]
    });
  }
  static url = "https://jsonplaceholder.typicode.com/todos";
  render() {
    const { posts } = this.state;
    var list = posts.map((postItem, index) => (
      <li key={index}>{postItem.content}</li>
    ));
    return <ul>{list}</ul>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
