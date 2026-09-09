import React from 'react'

function LoadingPage({ isLoading }) {
    return (
        <div
            className={`pre-loader bg-white fixed w-screen z-50 flex flex-col justify-center items-center ${isLoading ? 'h-screen' : 'h-0 -translate-y-14 transition-height duration-400'}`}>
            <div className='flex space-x-8'>
                <span className='loading-animation h-5 w-5 block bg-black/70 rounded-full'></span>
                <span className='loading-animation h-5 w-5 block bg-black/70 rounded-full'></span>
                <span className='loading-animation h-5 w-5 block bg-black/70 rounded-full'></span>
            </div>
        </div>)
}

export default LoadingPage