import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-64 right-0 bg-gray-900 shadow-lg py-4 px-8 h-16 z-50">
            <div className="flex justify-between items-center max-w-5xl mx-auto">
                {/* Archive Button */}
                <button
                    onClick={() => navigate('/archives')}
                    className="flex items-center text-gray-300 font-medium hover:text-indigo-400 transition duration-200 transform hover:scale-105"
                >
                    <span className="inline-flex items-center w-8 h-8 bg-gray-800 rounded-full mr-2 shadow-sm hover:shadow-md">
                        <img src='/public/back-svgrepo-com.svg' alt='Back' className='h-4 w-4 mx-auto' />
                    </span>
                    <span>Archive</span>
                </button>

                {/* Title */}
                <h1 className="text-2xl font-extrabold text-white tracking-wide">Tasks</h1>

                {/* This Week Button */}
                <button
                    onClick={() => navigate('/thisweek')}
                    className="flex items-center text-gray-300 font-medium hover:text-indigo-400 transition duration-200 transform hover:scale-105"
                >
                    <span>This Week</span>
                    <span className="inline-flex items-center w-8 h-8 bg-gray-800 rounded-full ml-2 shadow-sm hover:shadow-md">
                        <img src='/public/right-arrow-svgrepo-com.svg' alt='Next' className='h-4 w-4 mx-auto' />
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
