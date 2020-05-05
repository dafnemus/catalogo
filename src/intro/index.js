import React from 'react';

import TextIntro from '../textos/intro';

import Feminismo from './feminismo';
import style from './style.module.scss';

function Intro() {
  return (
    <div className={style.container}>
      <Feminismo />
      <TextIntro text="La filosofía feminista es poner en debate el lugar de la mujer, las cuestiones de género, la desigualdad y además visibilizar la lucha feminista que se ha llevado en los últimos tiempos, la cual es correlativa a todas las luchas. Por tal motivo, la pluralidad de las voces demuestra que no existen fronteras y que para comprender este movimiento feminista es necesario que sea analizado desde distintas disciplinas. Las obras expuestas sobre el feminismo confrontan con las relaciones de poder del patriarcado, el machismo, en ámbitos de la academia y de las instituciones por sobre la sociedad; además cuestionan el propio rol del feminismo en ambos hemisferios." />
    </div>
  );
}

export default Intro;
