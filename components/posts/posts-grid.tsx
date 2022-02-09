import React from 'react';
import { Posts } from '../../models';
import PostItem from './post-item';

import classes from './posts-grid.module.css';

const PostsGrid: React.FC<{ posts: Posts[] }> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.title}
          title={post.title}
          image={post.image}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
          content={post.content}
        />
      ))}
    </ul>
  );
};

export default PostsGrid;
