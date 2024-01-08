import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Card from './Card';

const contentSliderData = [
  {
    text: 'Brand Design 1',
    title: 'Fashion B&E logo branding 1',
    card: <Card />,
  },
  {
    text: 'Brand Design 2',
    title: 'Fashion B&E logo branding 2',
    card: <Card />,
  },
  {
    text: 'Brand Design 3',
    title: 'Fashion B&E logo branding 3',
    card: <Card />,
  },
  {
    text: 'Brand Design 4',
    title: 'Fashion B&E logo branding 4',
    card: <Card />,
  },
];
const imageSliderData = [
  {
    imageLink: 'https://source.unsplash.com/random/?gift,unboxing',
  },
  {
    imageLink: 'https://source.unsplash.com/random/?cloth,unboxing',
  },
  {
    imageLink: 'https://source.unsplash.com/random/?food,unboxing',
  },
  {
    imageLink: 'https://source.unsplash.com/random/?clothing,unboxing',
  },
];

const sliderData = {
  loopSlider: false,
  contentSliderData,
  imageSliderData,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App sliderData={sliderData} />
  // </React.StrictMode>
);
