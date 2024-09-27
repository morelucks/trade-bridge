import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SellerDashboard = ({ signer }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-72  bg-primary-200  text-black text-xl  p-4">
        <ul className="space-y-2 mt-24">
          <li>
            <Link to="create-commodity" className="block p-2 hover:bg-primary-100 rounded-xl">
              Create Commodity
            </Link>
          </li>
          <li>
            <Link to="orders" className="block p-2 hover:bg-primary-100 rounded-xl">
              Orders
            </Link>
          </li>
          <li>
            <Link to="my-commodity" className="block p-2 hover:bg-primary-100 rounded-xl">
              My Commodity
            </Link>
          </li>
          <li>
            <Link to="dispute" className="block p-2 hover:bg-primary-100 rounded-xl">
              Dispute
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet /> {/* Renders the matched child route component */}
      </main>
    </div>
  );
};

export default SellerDashboard;
