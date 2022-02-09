import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../lib/posts-util';
import { Posts } from '../../models';

const PostDetailPage = ({ post }: { post: Posts }) => {
  return <PostContent post={post} />;
};

export default PostDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
};
