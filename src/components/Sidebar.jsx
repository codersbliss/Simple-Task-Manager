import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-yellow-100 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">Task Manager App</h2>
        <nav className="space-y-4">
          <SidebarLink icon="📋" label="Plan" />
          <SidebarLink icon="📑" label="Task List" />
          <SidebarLink icon="⚠️" label="Overdue Tasks" />
          <SidebarLink icon="📅" label="Upcoming Tasks" />
          <SidebarLink icon="🗑️" label="Trash" />
        </nav>
      </div>
      <button className="mt-8 bg-gray-900 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}

function SidebarLink({ icon, label }) {
  return (
    <div className="flex items-center space-x-2 cursor-pointer hover:bg-yellow-200 rounded-lg px-3 py-2">
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}
