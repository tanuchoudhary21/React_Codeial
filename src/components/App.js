import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              className="logo"
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/png/512/3667/3667193.png"
                    alt="avatar-icon"
                  />
                  <span>Lakshay Yadav</span>
                </li>

                <li className="search-results-row" >
                  <img
                    src="https://image.flaticon.com/icons/png/512/3667/3667193.png"
                    alt="avatar-icon"
                  />
                  <span>Manu Choudhary</span>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://image.flaticon.com/icons/png/512/949/949635.png"
                alt="avatar-icon"
                id="user-dp"
              />

              <span>Tanu Choudhary</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>LogIn</li>
                <li>LogOut</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>

        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.prototypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
