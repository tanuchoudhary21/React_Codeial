import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostsList extends Component {
  render() {
      const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post.id}>
            <div className="post-header">
              {/* Post Avatar */}
              <div className="post-avatar">
                <img
                  src="https://img-premium.flaticon.com/png/512/2922/2922506.png?token=exp=1622264931~hmac=44074d43397f499bd7e0f0b87cbdfe9b"
                  alt="Avatar"
                />

                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute age</span>
                </div>

              </div>
              {/* Post Content */}
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/01/25/83/03/1000_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>
                <div className="post-comments-icon">
                  <img
                    src="https://image.flaticon.com/icons/png/512/54/54761.png"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>

              <div className="post-comment-box">
                <input placeholder=" Start typing a comment..." />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Tanu</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">15</span>
                  </div>

                  <div className="post-comment-content">Random Comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
    posts : PropTypes.array.isRequired,
};

export default PostsList;
