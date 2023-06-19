import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import PfImage from './../assets/ESokmean.jpg';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center 
      justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-6xl font-bold text-sky-600'>E Sokmean</h2>
            <h2 className='text-2xl sm:text-4xl font-bold text-teal-900'>Software Engineer</h2>
            <p className='text-1xl font-bold text-slate-500'>
            I'm a passionate software engineer specializing in web development as a front-end developer and OdooERP engineer. I'm earning to try new things, always looking for improvement to fulfill what I'm lacking to expand my skill set. 
            I believe in hard work, nothing is impossible if you work hard for it.
            </p>
            <div>
              <button className='group text-white w-fit px-6 py-3 my-2
              flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                About Me
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span>
              </button>
            </div>
        </div>
        <div>
          <img src={PfImage} alt="E Sokmean" 
         className="rounded-2xl mx-auto w-2/3 md:w-3/6"/>
        </div>
      </div>
    </div>
  )
}

export default Home;