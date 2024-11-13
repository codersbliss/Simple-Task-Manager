import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import navigationItems from '../utils/navigations';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed inset-y-0 left-0 bg-blue-200 text-gray-800 shadow-lg max-h-screen w-64 border-r border-gray-200">

      <div className="flex flex-col justify-between h-full">

        {/* Sidebar Header */}
        <div className="px-4 py-6 text-center border-b border-gray-200">
          <h1 className="text-2xl font-extrabold text-blue-600">
            <span className="text-blue-500">Task Manager</span> App
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 flex-grow">
          <ul className="space-y-3">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`flex items-center py-3 px-4 rounded-lg font-semibold text-sm transition duration-200 ${
                    location.pathname === item.href
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  <img src={item.icon} alt={`${item.name} icon`} className="mr-3 w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        {/* <div className="p-4 border-t border-gray-200">
          <button
            type="button"
            className="flex items-center justify-center w-full h-12 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <span className="ml-2 font-bold">Logout</span>
          </button>
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;
