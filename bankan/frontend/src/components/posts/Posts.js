import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads } from "../../actions/posts";

import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer,
  CustomPopoverContainer
} from "../../styles/Base";

export class Posts extends Component {
  state = { posts: [] };
  componentDidMount() {
    this.props.getLeads();
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

const mapStateToProps = state => ({
  leads: state.postsReducer.posts
});

export default connect(
  mapStateToProps,
  { getLeads }
)(Posts);
