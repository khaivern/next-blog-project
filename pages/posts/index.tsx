import React from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import { Posts } from '../../models';

const PostsPage = ({ posts }: { posts: Posts[] }) => {
  return <AllPosts posts={posts} />;
};

export default PostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
