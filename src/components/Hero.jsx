import React from 'react'
import beach from "../assets/beachVid.mp4"
import { AiOutlineSearch } from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='w-full h-full relative'>
        <video src={beach}
         className='w-full h-screen object-cover'
         autoPlay
         loop
         muted
        />
        <div className='absolute w-full h-screen top-0 left-0 bg-gray-900/30'></div>
        <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-center text-white'>
           <h1>First Class Travel</h1>
           <h2 className='py-4'>Top 1% Locations Worldwide</h2>
           <form className='border p-1 bg-gray-100 rounded-md flex justify-between items-center mx-auto w-[300px] md:w-[700px]'>
               <div>
                  <input type='text' placeholder='Search Destinations'
                    className='focus:outline-none p-4 bg-transparent text-black'
                  />
                </div>
                <div>
                    <button>
                        <AiOutlineSearch size={20}/>
                    </button>
                </div>
           </form>
        </div>
    </div>
  )
}

export default Hero