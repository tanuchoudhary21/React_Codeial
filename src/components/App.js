import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return <PostsList posts={posts} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);

// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions/posts';
// class App extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(fetchPosts());
//   }

//   render() {
//     return (
//       <div>
//         <h1>APP</h1>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//   };
// }

// export default connect()(App);
