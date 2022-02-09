import React from 'react';
import { Posts } from '../../models';

import PostsGrid from '../posts/posts-grid';

import classes from './featured-posts.module.css';

const FeaturedPosts: React.FC<{ posts: Posts[] }> = ({ posts }) => {
  return (
    <div className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </div>
  );
};

export default FeaturedPosts;
