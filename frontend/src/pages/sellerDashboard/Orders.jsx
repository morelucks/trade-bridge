import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  
  const contractAddress = "0xYourContractAddress"; 
  const contractABI = [ /* Your contract's ABI here */ ]; 

  
  const fetchOrdersFromContract = async () => {
    try {
     
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(contractAddress, contractABI, signer);

     
      const fetchedOrders = await contract.getOrders();

    
      setOrders(fetchedOrders);
    } catch (error) {
      console.error("Error fetching orders: ", error);
    } finally {
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    fetchOrdersFromContract();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Conditional rendering
  if (loading) {
    return <div className="mt-16 mx-20">Loading orders...</div>; // Loading message
  }

  if (orders.length === 0) {
    return <div className="mt-16 mx-20 text-center text-2xl">No orders available.</div>; // Show message if no orders
  }

  return (
    <div className="mt-16 mx-20">
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-10">
        {currentItems.map(order => (
          <div key={order.id} className="border w-80 h-80 rounded-xl p-4 bg-white shadow-md relative">
            {/* Top section: Buyer's address and status */}
            <div className="flex justify-between mb-2">
              <p className="text-sm font-semibold">{order.buyer}</p>
              <p
                className={`text-xs px-2 py-1 rounded-full font-bold ${
                  order.status === 'approved' ? 'bg-green-400 text-white' : 'bg-amber-400 text-white'
                }`}
              >
                {order.status === 'approved' ? 'Success' : 'Pending'}
              </p>
            </div>

            {/* Date row */}
            <div className="mb-2 flex">
              <p className="font-bold mr-2">Date:</p>
              <p>{order.date}</p>
            </div>

            {/* Line separator */}
            <hr className="border-t border-gray-300 my-2" />

            {/* Commodity information */}
            <div className="mb-2 space-y-3">
              <div className="flex justify-between">
                <p className="font-bold mr-2">Commodity:</p>
                <p>{order.commodity}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold mr-2">Quantity Purchased:</p>
                <p>{order.quantity}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold mr-2">Price per kg:</p>
                <p>${order.pricePerKg}</p>
              </div>
            </div>

            {/* Total amount */}
            <div className="mb-2 flex justify-between">
              <p className="font-bold">Total:</p>
              <p>${order.totalPrice}</p>
            </div>

            {/* Line separator */}
            <hr className="border-t border-gray-300 my-2" />
            {/* Approval button */}
            <div className='flex justify-center mt-8'>
              <button 
                onClick={() => handleApprove(order.id)} 
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
                disabled={order.status === 'approved'}
              >
                {order.status === 'approved' ? 'Approved' : 'Approve'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between mt-20">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-800'}`}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-800'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Orders;
