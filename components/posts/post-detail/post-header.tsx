import Image from 'next/image';
import React from 'react';

import classes from './post-header.module.css';

interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={`picture of ${title} post`}
        width={200}
        height={150}
      />
    </header>
  );
};

export default PostHeader;
