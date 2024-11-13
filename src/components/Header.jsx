import React from 'react';

const Header = () => {
    return (
        <header className="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
                <button className="flex items-center text-gray-600 font-semibold hover:text-yellow-600 transition transform hover:scale-105 duration-200">
                    <span className="inline-flex items-center w-6 h-6 text-xs bg-white rounded mr-2 transform hover:scale-105 duration-200">
                        <img src='/public/back-svgrepo-com.svg' alt='back' className='h-5 w-5' />
                    </span>
                    <span>Archive</span>
                </button>
                <h1 className="text-lg font-bold">Today's Plan</h1>
                <button className="flex items-center text-gray-600 font-semibold hover:text-yellow-600 transition transform hover:scale-105 duration-200">
                    <span>This week</span>
                    <span className="inline-flex items-center w-6 h-6 bg-white rounded ml-2 transform hover:scale-105 duration-200">
                        <img src='/public/right-arrow-svgrepo-com.svg' alt='Right' className='h-5 w-5' />
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;