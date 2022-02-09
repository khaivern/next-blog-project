import React, { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
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

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
