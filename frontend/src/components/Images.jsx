
import gingerImage from '../assets/images/illustration.png';
// import riceImage from '../assets/images/rice.jpg';
// import wheatImage from '../assets/images/wheat.jpg';
// import coffeeImage from '../assets/images/coffee.jpg';
// import cocoaImage from '../assets/images/cocoa.jpg';
// import goldImage from '../assets/images/gold.jpg';
// import silverImage from '../assets/images/silver.jpg';
// import copperImage from '../assets/images/copper.jpg';
// import ironImage from '../assets/images/iron.jpg';
// import bauxiteImage from '../assets/images/bauxite.jpg';

const images = {
  agricultural: [
    { name: 'Ginger', available: '20 tonnes', price: '0.005 ETH', image: gingerImage },
    { name: 'Rice', available: '50 tonnes', price: '0.002 ETH', image: gingerImage },
    { name: 'Wheat', available: '35 tonnes', price: '0.003 ETH', image: gingerImage},
    { name: 'Coffee', available: '15 tonnes', price: '0.007 ETH', image: gingerImage },
    { name: 'Cocoa', available: '40 tonnes', price: '0.010 ETH', image: gingerImage },
  ],
  solidMinerals: [
    { name: 'Gold', available: '10 tonnes', price: '0.050 ETH', image: gingerImage },
    { name: 'Silver', available: '20 tonnes', price: '0.030 ETH', image: gingerImage },
    { name: 'Copper', available: '60 tonnes', price: '0.015 ETH', image: gingerImage },
    { name: 'Iron Ore', available: '100 tonnes', price: '0.012 ETH', image: gingerImage},
    { name: 'Bauxite', available: '80 tonnes', price: '0.020 ETH', image: gingerImage},
  ],
};

export default images;
