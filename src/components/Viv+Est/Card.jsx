import React from 'react';
import Estrellas from './Estrellas';

function Card() {
  return (
    <div className='card'>
      <img src='{image1}' alt='Begonia' />
      <div className='card-body'>
          <h4 className='card-title'>Begonia</h4>
          <p className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, veniam. Laboriosam dolore est velit labore repellendus odio maxime voluptates, doloremque ratione aspernatur perspiciatis quasi! Eligendi nobis accusamus atque eaque qui.</p>
          <Estrellas />
      </div>
  </div>
  )
}

export default Card
