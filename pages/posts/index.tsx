import Head from 'next/head';
import React, { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import { Posts } from '../../models';

const PostsPage = ({ posts }: { posts: Posts[] }) => {
  return (
    <Fragment>
      <Head>
        <title>List of blog posts</title>
        <meta name='description' content='list of all available posts' />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
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
