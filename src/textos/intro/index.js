/* eslint-disable react/prop-types */
import React from 'react';

import style from './style.module.scss';

function TextIntro({ text }) {
  return <p className={style.text}>{text}</p>;
}

export default TextIntro;
