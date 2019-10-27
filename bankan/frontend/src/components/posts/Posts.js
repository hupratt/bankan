import React, { Component, Fragment } from "react";
import axios from "axios";
import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer,
  CustomPopoverContainer
} from "../../styles/Base";

export default class Posts extends Component {
  state = { posts: [] };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    const { posts } = this.state;
    var list = posts.map((postItem, index) => (
      <MovableCardWrapper key={index}>
        <CardHeader>
          <CardTitle>
            <ul>{postItem.title}</ul>
          </CardTitle>
          <CardRightContent>{postItem.completed}</CardRightContent>
        </CardHeader>
        <Detail>{postItem.userId}</Detail>
        <Footer />
        <CustomPopoverContainer />
      </MovableCardWrapper>
    ));
    return <Fragment>{list}</Fragment>;
  }
}
