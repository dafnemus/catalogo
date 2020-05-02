/* eslint-disable react/prop-types */
import React from 'react';

import style from './style.module.scss';

function TextPortada({ text }) {
  return <h1 className={style.texto}>{text}</h1>;
}

export default TextPortada;
