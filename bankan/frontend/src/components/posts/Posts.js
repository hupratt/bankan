import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../actions/posts";
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
  componentDidMount() {
    this.props.getLeads();
  }
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
        <Detail>{postItem.message}</Detail>
        <Footer />
        <CustomPopoverContainer />
        <button
          onClick={this.props.deleteLead.bind(this, postItem.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </MovableCardWrapper>
    ));
    return <Fragment>{list}</Fragment>;
  }
}

const mapStateToProps = state => ({
  posts: state.postsReducer.posts
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Posts);
