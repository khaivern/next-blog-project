import React from 'react';
import AllPosts from '../../components/posts/all-posts';
import { Posts } from '../../models';

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

const PostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
