import React from 'react';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

import classes from './post-content.module.css';

const DUMMY_POST = {
  title: 'Getting Started With NextJS',
  slug: 'getting-started-with-nextjs',
  date: '2022-02-10',
  image: 'getting-started-nextjs.png',
  content: '# This is a test',
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
