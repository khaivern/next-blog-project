import React, { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import { Posts } from '../models';

const DUMMY_POSTS: Posts[] = [
  {
    title: 'Getting Started With NextJS',
    slug: 'getting-started-with-nextjs',
    excerpt: 'NextJS is the React Framework for production',
    date: '2022-02-10',
    image: 'getting-started-nextjs.png',
  },
  {
    title: 'Getting Started With NextJS 2',
    slug: 'getting-started-with-nextjs',
    excerpt: 'NextJS is the React Framework for production',
    date: '2022-02-10',
    image: 'getting-started-nextjs.png',
  },
];

const HomePage = ({ posts }: { posts: Posts[] }) => {
  return (
    <Fragment>
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
