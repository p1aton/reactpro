/* eslint-disable no-shadow */
import React from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

enum TagSize {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
}

type TagSizeType = keyof typeof TagSize;

interface TagProps {
  size: TagSizeType;
}

const Heading: React.FC<TagProps> = ({ children, size }) => {
  const classes = cn(s.root, s[size]);
  return <div className={classes}>{children}</div>;
};

export default Heading;
