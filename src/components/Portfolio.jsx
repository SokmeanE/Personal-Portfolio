import React from 'react';
import OnlyChat from '../assets/OnlyChat.jpg';
import electron from '../assets/electron.png';
import odoo from '../assets/odoo.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: odoo,
            title: 'Odoo Upgrade',
            h3: 'Odoo Engineer',
            dcp: 'Upgrade from old version 8.0 to version 13.0 and customize functionality based on users need, mainly involve in Invetory, Purchase, Hotel management, Manufacturing.',
            tech: 'Odoo OpenSource, Python, XML, PostgresSQL',

        },
        {
            id: 2,
            src: electron,
            title: 'PoS System',
            h3: 'Frontend Developer',
            dcp: 'Develop a desktop application which is about PoS system for selling product at a shop. Mainly focus on generating receipts and handling stock of the shop.',
            tech: 'ReactJS, Material UI, Electron JS, JavaScript',
        },
        {
            id: 3,
            src: OnlyChat,
            title: 'Chatting system',
            h3: 'Frontend Developer',
            dcp: 'Chatting website that chat anonymously within user, user can generate link and share. Then other will access the chat by that link and their identity remain anonymous.',
            tech: 'ReactJS, TailwindCSS, TypeScript',
        },
    ]
  return (
    <div name='experiences' className='w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-700  text-sky-600'>
                    Experiences</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 w-full gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src, title, h3, dcp, tech}) => (
                
                <div key={id} className='shadow-md shadow-gray-500 rounded-lg '>
                    <img src={src} alt=""
                    className='rounded-t duration-200 hover:scale-105 h-44' />
                    <div className='items-center justify-center'>
                        <div className='text-gray-500 text-center text-3xl pt-8 pb-2'>{title}</div>
                        <h3 className='text-sky-600 text-center text-xl py-1'>{h3}</h3>
                        <p className='py-5 px-8'>{dcp}</p>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                    <hr class="items-center h-px w-12 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </div>
                    <h3 className='text-sky-600 text-center py-1'>Technologies </h3>
                    <p className='text-center py-5 px-8'>{tech}</p>
                </div>
                
            
                ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio