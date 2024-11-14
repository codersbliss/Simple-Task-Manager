import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="fixed right-0 top-0 left-64 bg-gray-600 text-white py-3 px-6 h-16 shadow-md z-10">
            <div className="flex justify-between items-center max-w-5xl mx-auto">

                {/* Back/Archive Button */}
                <button
                    onClick={() => navigate('/archives')}
                    className="flex items-center text-gray-200 font-semibold hover:text-black transition-transform transform hover:scale-105 duration-200"
                >
                    <span className="inline-flex items-center w-6 h-6 bg-white rounded-full mr-2 p-1">
                        <img src='/back-svgrepo-com.svg' alt='Back' className='h-4 w-4' />
                    </span>
                    <span>Archive</span>
                </button>

                {/* Header Title */}
                <h1 className="text-xl font-semibold tracking-wide text-white">Tasks</h1>

                {/* This Week Button */}
                <button
                    onClick={() => navigate('/thisweek')}
                    className="flex items-center text-white font-semibold hover:text-black transition-transform transform hover:scale-105 duration-200"
                >
                    <span>This Week</span>
                    <span className="inline-flex items-center w-6 h-6 bg-white rounded-full ml-2 p-1">
                        <img src='/right-arrow-svgrepo-com.svg' alt='Right' className='h-4 w-4' />
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;
