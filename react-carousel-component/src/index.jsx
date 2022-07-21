import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  { url: '../images/001.png' },
  { url: '../images/004.png' },
  { url: '../images/007.png' },
  { url: '../images/025.png' },
  { url: '../images/039.png' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel images={images}/>);
