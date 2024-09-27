// CreateCommodity.jsx
import React, { useState } from 'react';
import Buttons from "../../components/Buttons"

const CreateCommodity = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store the image data in state
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='mt-24 mx-24'>
      <h1 className="text-3xl font-bold mb-4">Create Commodity</h1>
      {/* Form for creating a commodity */}
      <form className="space-y-4 w-[700px]">
        <div>
          <label className="">Commodity Name</label>
          <input type="text" className="border rounded-xl w-full p-3" placeholder="Enter commodity name" />
        </div>
        <div>
          <label className="">Commodity Quantity</label>
          <input type="text" className="border rounded-xl w-full p-3" placeholder="Enter available quantity" />
        </div>
        <div>
          <label className="">Quantity Measurement</label>
          <input type="text" className="border rounded-xl w-full p-3" placeholder="E.g (Kg, tonnes)" />
        </div>
        <div>
          <label className="">Price per Quantity</label>
          <input type="text" className="border rounded-xl w-full p-3" placeholder="Enter price" />
        </div>
        <div>
          <label className="">Commodity Description</label>
          <textarea type="text" className="border rounded-xl w-full p-3" placeholder="Enter commodity description" />
        </div>
        <div>
          <label className="">Upload Image</label>
          <input 
            type="file" 
            className="border rounded-lg w-full p-3 h-24 bg-white cursor-pointer hover:border-blue-500"  // Rounded edges and hover effect
            accept="image/*" 
            onChange={handleImageUpload} 
          />
          {image && <img src={image} alt="Uploaded Preview" className="mt-2 h-40 w-auto rounded-lg" />}
        </div>
        <button type="submit" className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-6 py-3 w-full rounded-full shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
        Create Commodity 
        </button>
        
      </form>
    </div>
  );
};

export default CreateCommodity;
