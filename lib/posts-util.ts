import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Data {
  data: {
    title: string;
    date: string;
    image: string;
    excerpt: string;
    isFeatured: boolean;
  };
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(contentDirectory, postSlug + '.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent) as unknown as Data;

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getPostFiles = () => {
  return fs.readdirSync(contentDirectory);
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
