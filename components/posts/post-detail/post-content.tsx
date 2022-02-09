import { Content } from 'mdast';

import React, { ReactElement, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import PostHeader from './post-header';
import { Posts } from '../../../models';

import classes from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

type NodeToProps<T> = {
  node: T;
  children: T extends { children: any } ? ReactNode : never;
};

type CustomRenderers = {
  [K in Content['type']]?: (
    props: NodeToProps<Extract<Content, { type: K }>>
  ) => ReactElement;
};

const PostContent = ({ post }: { post: Posts }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers: CustomRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt || 'Blog image'}
              width={600}
              height={300}
            />
          </div>
        );
      } else return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code as unknown as {
        language: string;
        value: React.ReactNode;
      };
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {value}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
