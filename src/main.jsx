import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Card from './Card';

const contentSliderData = [
  {
    text: 'Timeless Elegance',
    title: 'Sophisticated Attire Collection: A Journey Through Fashion History',
    card: <Card />,
    },
    {
    text: 'Celestial Rhythms',
    title: 'Stellar Symphony of Colors: Cosmic Artistry Unveiled',
    card: <Card />,
    },
    {
    text: 'Serene Meadows',
    title: 'Tranquil Landscapes: A Fusion of Nature and Serenity',
    card: <Card />,
    },
    {
    text: 'Urban Mystique',
    title: 'Metropolitan Mirage: Exploring the Enigma of Cityscapes',
    card: <Card />,
    }
];
const imageSliderData = [
  {
    imageLink: 'https://source.unsplash.com/random/?product,mockup,medicine',
  },
  {
    imageLink: 'https://source.unsplash.com/random/?product,mockup,cloth',
  },
  {
    imageLink: 'https://source.unsplash.com/random/?product,mockup,coffe',
  },
  {
    imageLink: 'https://source.unsplash.com/random/?product,mockup,food',
  },
];

const sliderData = {
  imageWidth: 420,
  imageHeight: 620,
  speed: 3000,
  autoPlay: false,
  contentSliderData,
  imageSliderData,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App sliderData={sliderData} />
  // </React.StrictMode>
);
