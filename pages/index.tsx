import Head from 'next/head';
import React, { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import { Posts } from '../models';

const HomePage = ({ posts }: { posts: Posts[] }) => {
  return (
    <Fragment>
      <Head>
        <title>A Memer&apos;s Blog</title>
        <meta
          name='description'
          content="A personal blog project to play with NextJS and it's wonderful features"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}
