import React from 'react';
import { FaWallet } from 'react-icons/fa'; 

const ConnectWalletButton = () => {
  return (
    <button
      className="flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-gray-600 px-6 py-3 rounded-full shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
    >
      <FaWallet size={20} /> {/* Wallet Icon */}
      <span className="font-semibold">Connect Wallet</span>
    </button>
  );
};

const SellerBuyerButton = () => {
  return (
    <button
      className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
    >
      Be a seller/buyer
    </button>
  );
};

export default ConnectWalletButton;
