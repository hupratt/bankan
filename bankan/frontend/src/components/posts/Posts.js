import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads } from "../../actions/posts";
import PropTypes from "prop-types";

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
  static propTypes = {
    getLeads: PropTypes.func.isRequired
  };

  render() {
    const { posts } = this.props;
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
    return (
      <Fragment>
        <button onClick={this.props.getLeads} className="btn btn-primary">
          {" "}
          Submit
        </button>
        {list}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postsReducer.posts
});

export default connect(
  mapStateToProps,
  { getLeads }
)(Posts);
