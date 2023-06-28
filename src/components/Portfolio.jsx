import React from 'react';
import OnlyChat from '../assets/OnlyChat.jpg';
import electron from '../assets/electron.png';
import odoo from '../assets/odoo.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: odoo,
        },
        {
            id: 2,
            src: electron,
        },
        {
            id: 1,
            src: OnlyChat,
        },
    ]
  return (
    <div name='portfolio' className='w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-700  text-sky-600'>
                    Experiences</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src}) => (
                
                <div key={id} className='shadow-md shadow-gray-500 rounded-lg '>
                    <img src={src} alt=""
                    className='rounded-t duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='px-6 py-3 m-4 duration-200 hover:scale-105  text-sky-600 text-1xl font-bold'>
                        Detail
                    </button>
                </div>
                </div>
                
            
                ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio