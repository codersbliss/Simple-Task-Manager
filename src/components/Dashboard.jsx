import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <header className="flex justify-between items-center mb-8">
        <button className="text-sm text-gray-700">← Archive</button>
        <h2 className="text-xl font-semibold">Today's Plan</h2>
        <button className="text-sm text-gray-700">This week →</button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="font-bold text-lg">Hii!! Prateek 👋</h3>
          <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg shadow">Start tracking</button>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg">
          <p className="font-medium text-lg">0</p>
          <p className="text-sm text-gray-600">Tasks finished</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <p className="font-medium text-lg">5.5</p>
          <p className="text-sm text-gray-600">Tracked hours</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg">
          <p className="font-medium text-lg">Your daily plan</p>
          <p className="text-sm text-gray-600">0 of 0 completed</p>
        </div>
      </div>
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Your tasks today</h2>
        <p className="text-gray-600">No tasks for today!</p>
      </section>
    </div>
  );
}
