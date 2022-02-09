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

const getPostData = (filename: string) => {
  const filePath = path.join(contentDirectory, filename);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent) as unknown as Data;

  const postSlug = filename.replace(/\.md$/, '');

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(contentDirectory);
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
