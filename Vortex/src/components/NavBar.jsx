import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-4xl font-Zen Kaku Gothic Antique font-normal"
        >VORTEX</p>
        <ul className="flex space-x-4">
          <li><a href="#live" className="hover:text-gray-400">Live Status</a></li>
          <li><a href="#analytics" className="hover:text-gray-400">Analytics</a></li>
          <li><a href="#history" className="hover:text-gray-400">History</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
