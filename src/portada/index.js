import React from 'react';
import TextPortada from '../textos/portada';
import Simbolo from './simbolo';
import style from './style.module.css';

function Portada() {
  return(
  <div className={style.container}>
    <TextPortada text="Catálogo Filosofía Feminista" />
    <Simbolo/>
  </div>
  );
};

export default Portada;
