import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'experiences'
        },
        {
            id: 3,
            link: 'about'
        },
    ];
    
    return(
        <div className="flex justify-between items-center px-10 w-full h-20 text-black bg-white border-b-2 border-slate-100 fixed">
            <ul className="hidden md:flex">
            {links.map(({id, link}) => (
                <li 
                    key={id} 
                    className="px-4 cursor-pointer capitalize font-bold text-sky-600 hover:text-gray-600 hover:underline duration-300">
                    <Link to={link} smooth duration={500}>
                    {link}
                    </Link>
                </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav) } className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
            </div>
            {nav && (
            <ul className="flex flex-col items-center absolute top-0 left-0 w-full h-fit bg-white text-sky-600 border-b-2">
                {links.map(({id, link}) => (
                    <li 
                        key={id} 
                        onClick={FaTimes}
                        className="px-4 cursor-pointer capitalize py-6">
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                    ))}
            </ul>
            )}  
        </div>
    );
};

export default NavBar;