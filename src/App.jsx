import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="flex min-h-screen bg-yellow-50 text-gray-900">
      <Sidebar />
      <main className="flex-1 p-6">
        <Dashboard />
      </main>
    </div>
  );
}
