import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gray-100 sm:p-10 sm:py-36'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-700  text-sky-600'>
                    About Me</p>
            </div>
            <p className='text-xl'>
            I'm a passionate software engineer specializing in web development as a front-end developer and OdooERP engineer. I'm earning to try new things, always looking for improvement to fulfill what I'm lacking to expand my skill set. I believe in hard work, nothing is impossible if you work hard for it.
            </p>
            <br />
            <p className='text-xl'>
              I have work in various project such  developing an Point of Sale system Desktop application, 
              an anonymous chatting website and another project is an odoo ERP system project. 
              These projects not only sharpened my UX/UI design and frontend development skills but also cultivated the value of empowering others through technology.
            </p>
            <br />
            <p className='text-xl'>
            Aside from the technical skills I'm also leader and a problem solver. I have a strong foundation in Teamwork, Communication and Flexibility</p>
        </div>
    </div>
  )
}

export default About