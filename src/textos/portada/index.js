import React from 'react';
import style from '../portada/style.module.css'

function TextPortada({text}) {
return <h1 className={style.texto} >{text}</h1>
}

export default TextPortada;

