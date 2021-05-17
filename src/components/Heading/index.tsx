/* eslint-disable no-shadow */
import React from 'react';
// import cn from 'classnames';
import s from './Heading.module.scss';

interface TagSize {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Heading: React.FC<TagSize> = ({ children, tag: Tag }) => {
  return <Tag className={s[Tag]}>{children}</Tag>;
};

export default Heading;
