import React from 'react';

const Contact = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
  return (
    <div name='contact' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    id='wrapper' onClick={handleClose}>
        <div className='justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={() => onClose()}>
                    X</button>
            </div>
            <div className='flex justify-center items-center bg-white rounded-xl '>
                <form action="https://getform.io/f/0c29559e-3501-4e35-b3a8-2b504a227903"
                method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <div
                className='text-4xl p-6 font-bold text-sky-600 place-self-center'>
                    Contact Me</div>
                    <input type="text" name="name" placeholder="Enter your name" 
                    className='p-2 bg-transparent border-2 border-sky-600 rounded-md
                    focus:outline-none sm:w-3/6 md:w-full place-self-center'/>
                    <input type="text" name="email" placeholder="Enter your email" 
                    className='my-4 p-2 bg-transparent border-2 border-sky-600 rounded-md
                    focus:outline-none sm:w-3/6 md:w-full place-self-center'/>
                    <textarea name="message" rows="10"
                    className='p-2 bg-transparent border-2 border-sky-600 rounded-md
                    focus:outline-none sm:w-3/6 md:w-full place-self-center'
                    ></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500
                    to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact