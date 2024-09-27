import React from "react";
import illustration from "../assets/images/illustration.png";

const Hero = () => {
  return (
    <div className="mx-40 mt-20">
      <div className="flex items-center justify-center gap-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-wrap">
            A decentralized commodity <br /> market place
          </h1>
          <p className="text-wrap text-xl">
            <span className="block">
              Trade bridge is a decentralized commodity exchange platform
            </span>
            <span className="block">
              that allows buyers and sellers to trade commodities in a trustless
              environment
            </span>
            <span className="block">
              using blockchain technology, incorporated with tokenization,
              decentralized, and NFT minting/burning to represent commodity
              ownership.
            </span>
            <span className="block">
            
            </span>
          </p>

          <button className="bg-yellow-500 p-3 rounded-lg">Explore more</button>
        </div>
        <div className="mt-20">
        <img src={illustration} alt="Buyer and Seller" className="w-[1020px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
