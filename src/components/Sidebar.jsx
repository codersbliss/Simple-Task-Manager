import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import navigationItems from '../utils/navigations';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed inset-y-0 left-0 bg-green-700 text-black-100 shadow-lg max-h-screen w-64">
      <div className="flex flex-col justify-between h-full">

        {/* Sidebar Header */}
        <div className="px-4 py-6 text-center border-b border-gray-700">
          <h1 className="text-2xl font-semibold text-blue-100">
            Task <span className="text-black font-semibold">Manager</span>
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 flex-grow">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`flex items-center py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                      isActive ? 'bg-white text-black' : 'hover:bg-black-800 text-black-300'
                    }`}
                  >
                    <img src={item.icon} alt={`${item.name} icon`} className="mr-3 w-5 h-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
