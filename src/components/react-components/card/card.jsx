import React from 'react';
import style from './card.module.css';

const Card = ({ name, img, additionalText }) => {
  return (
    <div className={style.container}>
      <span>{name}</span>
      <img className={style.container_img} src={`img/${img}.png`}></img>
      <span> {additionalText} </span>
    </div>
  );
};

export default Card;
