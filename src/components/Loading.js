import React from 'react';
import './loading.css';
import image from '../images/rings.svg'

const Loading = () => (
  <div className="loading">
    <picture>
      <img srcSet={image} alt="Loading"/>
    </picture>
  </div>
)

export default Loading;