import React from 'react'
import { useState } from 'react';
import './Estrellas.css';

const possibleRates = [1, 2, 3, 4, 5];

function Estrellas() {
  const [selectedRate, setSelectedRate] = useState(null);
  const [hoveredRate, setHoveredRate] = useState(null);

    return (
      <div className="stars">
          {possibleRates.map(rate => <i
          key={rate}
          className={"fas fa-star"
          + ((rate <= selectedRate) ? ' in-rate' : '')
          + ((rate <= hoveredRate) ? ' in-hover' : '')}
          onClick={() => setSelectedRate(rate)}
          onMouseEnter={() => {setHoveredRate(rate); setSelectedRate(null)}}
          onMouseLeave={() => setHoveredRate(null)}
          ></i>)
          }
      </div>
  );
}

export default Estrellas;