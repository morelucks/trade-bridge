import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../components/Images'

const MarketPlace = () => {
  const navigate = useNavigate();

  // Use the imported images instead of hardcoding them
  const agriculturalCommodities = images.agricultural;
  const solidMineralCommodities = images.solidMinerals;

  // State to manage "Show More" visibility for each group
  const [showMoreAgri, setShowMoreAgri] = useState(false);
  const [showMoreSolid, setShowMoreSolid] = useState(false);

  const handleShowMore = (group) => {
    if (group === 'agricultural') setShowMoreAgri(!showMoreAgri);
    if (group === 'solid') setShowMoreSolid(!showMoreSolid);
    navigate(`/marketplace/${group}`);
  };

  return (
    <div className='p-8 mx-40 mt-40'>
      {/* Agricultural Commodities Section */}
      <div className='mb-12'>
        <h1 className='text-2xl font-bold mb-4'>Agricultural Commodities</h1>
        <div className='grid grid-cols-5 gap-12'>
          {agriculturalCommodities.slice(0, showMoreAgri ? agriculturalCommodities.length : 5).map((commodity, index) => (
            <div key={index} className='border rounded-lg shadow-md w-72'>
              <div className='h-48 overflow-hidden mb-4'>
                <img src={commodity.image} alt={commodity.name} className='h-full w-full object-cover rounded-t-lg' />
              </div>
              <div className='p-2 h-24 bg-white rounded-b-lg'>
                <h2 className='text-lg font-semibold mb-2'>{commodity.name}</h2>
                <div className='space-y-1'>
                  <div className='flex justify-between'>
                    <p>Available</p>
                    <p>{commodity.available}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Price per Kilogram</p>
                    <p>{commodity.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-end'>
          <button
            onClick={() => handleShowMore('agricultural')}
            className='mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-800'
          >
            {showMoreAgri ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>

      {/* Solid Mineral Commodities Section */}
      <div>
        <h1 className='text-2xl font-bold mb-4'>Solid Mineral Commodities</h1>
        <div className='grid grid-cols-5 gap-12'>
          {solidMineralCommodities.slice(0, showMoreSolid ? solidMineralCommodities.length : 5).map((commodity, index) => (
            <div key={index} className='border rounded-lg shadow-md w-72'>
              <div className='h-48 overflow-hidden mb-4'>
                <img src={commodity.image} alt={commodity.name} className='h-full w-full object-cover rounded-t-lg' />
              </div>
              <div className='p-2 h-24 bg-white rounded-b-lg'>
                <h2 className='text-lg font-semibold mb-2'>{commodity.name}</h2>
                <div className='space-y-1'>
                  <div className='flex justify-between'>
                    <p>Available</p>
                    <p>{commodity.available}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Price per Kilogram</p>
                    <p>{commodity.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-end'>
          <button
            onClick={() => handleShowMore('solid')}
            className='mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-800'
          >
            {showMoreSolid ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
