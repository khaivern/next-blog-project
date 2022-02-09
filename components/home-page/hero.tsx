import Image from 'next/image';
import React from 'react';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/pineapple.jpg'
          alt='Profile Picture'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Khai</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
        voluptatum iusto assumenda nostrum natus cumque laboriosam facilis
        provident accusantium soluta.
      </p>
    </section>
  );
};

export default Hero;
