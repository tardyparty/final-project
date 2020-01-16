import PostCard from '../postCard';
import React from 'react';

const PostList = props => {
  if (!props.posts) {

    // console.log(props);
    return (
      <div>Loading...</div>
    );
  }

  if (props.posts.length === 0) {
    return (
      <div className="article-preview">
        No posts are here... Make one?.
      </div>
    );
  }

  return (
    <div>
      {
        props.posts.map(post => {
          return (
            <PostCard post={post} key={post._id} />
          );
        })
      }
    </div>
  );
};

export default PostList;