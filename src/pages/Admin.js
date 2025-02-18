import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Manage and monitor system operations here.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
