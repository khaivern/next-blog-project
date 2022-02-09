import React from 'react';
import { Posts } from '../../models';
import PostsGrid from './posts-grid';

import classes from './all-posts.module.css';

const AllPosts: React.FC<{ posts: Posts[] }> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
