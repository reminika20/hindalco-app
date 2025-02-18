import React from 'react';

function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
      <ul className="space-y-2">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
