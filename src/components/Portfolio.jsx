import React from 'react';
import OnlyChat from '../assets/OnlyChat.jpg';
import electron from '../assets/electron.svg';
import odoo from '../assets/odoo.png';

const Portfolio = () => {
  return (
    <div name='experiences' className='w-full md:h-fit py-36 my-24 sm:p-10 sm:py-36'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-700  text-sky-600'>
                    Experiences</p>
            </div>
            <div  className='items-center justify-center grid sm:grid-cols-2 md:grid-cols-2 w-full gap-8 px-12 sm:px-0'>
            {/* odoo */}
                
                <div className='shadow-md shadow-gray-500 rounded-lg'>
                    <div className='flex items-center justify-center '>
                    <img src={odoo} alt=""
                    className='rounded-t duration-200 hover:scale-105 h-44 sm:max-w-full block mr-0 ml-0' />
                    </div>
                    
                    <div className='items-center justify-center'>
                        <div className='text-gray-500 text-center text-3xl pt-8 pb-2'>Odoo Upgrade</div>
                        <h3 className='text-sky-600 text-center text-xl py-1'>Odoo Engineer</h3>
                        <p className='py-5 px-8'>Upgrade version and functionalities customization specially in Invetory, Purchase, Hotel management, Manufacturing.</p>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                        <button className='text-white bg-sky-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        <a href='https://gitlab.com/e.sokmean19/odoo-upgrade-phase-4'>
                        Github
                        </a>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                    <hr class="items-center h-px w-12 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </div>
                    <h3 className='text-sky-600 text-center py-1'>Technologies </h3>
                    <p className='text-center py-5 px-8'>Odoo OpenSource, Python, XML, PostgresSQL</p>
                </div>
            {/* // electron */}
            <div className='shadow-md shadow-gray-500 rounded-lg'>
                    <div className='flex items-center justify-center '>
                    <img src={electron} alt=""
                    className='rounded-t duration-200 hover:scale-105 h-44 sm:max-w-full block mr-0 ml-0' />
                    </div>
                    
                    <div className='items-center justify-center'>
                        <div className='text-gray-500 text-center text-3xl pt-8 pb-2'>SmartSell</div>
                        <h3 className='text-sky-600 text-center text-xl py-1'>Frontend Developer</h3>
                        <p className='py-5 px-8'>PoS system for selling product at a shop. Mainly focus on generating receipts and handling stock of the shop.</p>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                        <button className='text-white bg-sky-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        <a href='https://github.com/incubation-center/Electron-DesktopApp---Group4'>
                        Github
                        </a>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                    <hr class="items-center h-px w-12 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </div>
                    <h3 className='text-sky-600 text-center py-1'>Technologies </h3>
                    <p className='text-center py-5 px-8'>ReactJS, Material UI, Electron JS, JavaScript</p>
            </div>
            {/* onlychat */}
            <div className='shadow-md shadow-gray-500 rounded-lg'>
                    <div className='flex items-center justify-center '>
                    <img src={OnlyChat} alt=""
                    className='rounded-t duration-200 hover:scale-105 h-44 sm:max-w-full block mr-0 ml-0' />
                    </div>
                    
                    <div className='items-center justify-center'>
                        <div className='text-gray-500 text-center text-3xl pt-8 pb-2'>OnlyChat</div>
                        <h3 className='text-sky-600 text-center text-xl py-1'>Frontend Developer</h3>
                        <p className='py-5 px-8'>Anonymous Chatting website that user can generate link and share. Then other will access the chat by that link and their identity remain anonymous.</p>
                    </div>
                    <div className="items-center justify-center flex flex-row space-x-8">
                        <button className='text-white bg-sky-600 px-6 py-3 my-auto mx-0 flex items-center rounded-md hover:scale-110 duration-300'>
                            <a href='https://github.com/incubation-center/B8-FullStack--Website--Group2'>
                            Github
                            </a>
                        </button>
                    <button className='text-white bg-sky-600 px-6 py-3 my-auto mx-0 flex items-center rounded-md hover:scale-110 duration-300'>
                    <a href='https://onlychat.vercel.app/'>
                        Demo
                    </a>
                    </button>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                    <hr class="items-center h-px w-12 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </div>
                    <h3 className='text-sky-600 text-center py-1'>Technologies </h3>
                    <p className='text-center py-5 px-8'>ReactJS, TailwindCSS, TypeScript</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio