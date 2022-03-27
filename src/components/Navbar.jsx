import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px]  mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <h1 className='text-[#00d8ff]'>DEFi</h1>
            </div>
            <div className='hidden md:flex '>
                <ul className='flex text-white items-center'>
                    <li>Platforms</li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>About</li>
                    <button className='ml-4'>Use DEFi</button>
                </ul>
            </div>
            {/* Hamburger Menu */}
            <div onClick={handleNav} className='block md:hidden'>
                {
                    nav?<AiOutlineClose size={30} className="text-white"></AiOutlineClose>:<AiOutlineMenu size={30} className="text-white"></AiOutlineMenu>
                }                
            </div>
            {/* Mobile Menu */}
            <div className={nav?'bg-black w-full text-white absolute top-[90px] left-0 flex justify-center text-center':'hidden'}>
                <ul>
                    <li className='text-2xl'>Developers</li>
                    <li className='text-2xl'>Platforms</li>
                    <li className='text-2xl'>Community</li>
                    <li className='text-2xl'>About</li>
                    <button className='m-8'>Use DEFi</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar