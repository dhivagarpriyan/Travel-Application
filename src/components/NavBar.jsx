import React, { useState } from 'react'
import {BiSearch} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const NavBar = () => {

    const[nav,setNav]=useState(false);
    const[logo,setLogo]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
        setLogo(!logo);
    }
    const Navbar=[
        {
           Label:"Home"
        },
        {
            Label:"Destinations"
        },
        {
            Label:"Travel"
        },
        {
            Label:"View"
        },
        {
            Label:"Book"
        },

    ]
  return (
    <div className='w-full flex justify-between items-center h-20 mx-auto px-8 z-10 absolute text-white'>
       <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
      </div>      
          <ul className='hidden md:flex'>
            {Navbar.map((item,index)=>(
               <li key={index} className='text-xl px-4 font-bold'>
                  <a>{item.Label}</a>
               </li>
            ))}
        </ul>
        <div className='hidden md:flex gap-x-4 font-bold'>
           <BsPerson size={20}/>
           <BiSearch size={20}/>
        </div>
        <div onClick={handleNav} className=' block md:hidden z-10'>
            {nav?<AiOutlineClose style={{color:'black'}}/>:<HiOutlineMenuAlt4 />}
        </div>
          
          <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full h-screen  bg-gray-100/90 px-4 py-7 flex flex-col ' : 'absolute left-[-100%]'}>
          <ul className=''>
            <h1>BEACHES.</h1>
            {Navbar.map((item,index)=>(
               <li key={index} className='text-xl px-4 font-bold'>
                  <a>{item.Label}</a>
               </li>
            ))}
             <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
             
          </div>
    </div>
  )
}

export default NavBar