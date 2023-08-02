import React, { useState } from 'react';
import logo from '../asessts/profile.jpeg';
import { Link } from 'react-scroll';
import {BiMenu} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai'


export default function Header() {

  const [open,setOpen] = useState(false);

    let Links = [
        {name:"Home", link: 'home'},
        {name:"About", link: 'about'},
        {name:"Projects", link: 'projects'},
        {name:"Contact", link: 'contact'},
    ]
  return (
    <>
      <div className='w-full relative z-[100]'>
        <div className='md:flex items-center justify-between bg-white py-4 md:py-0 md:px-14 px-7 fixed top-0 right-0 left-0
        shadow-md'>
            {/* logo */}
            <div className='font-bold text-2xl trackig-wide cursor-pointer flex items-center gap-1'>
               <img src={logo} alt ='' className='rounded-[100%] md:w-12 md:h-12 w-10 h-10'/>
               <span className='text-blue-700 hover:text-purple-700 md:ml-3 ml-2'>Awadhesh Yadav</span>
            </div>
            {/* menu icon */}
            <div onClick={()=>setOpen(!open)} className='w-7 h-7 text-blue-700 cursor-pointer absolute right-8 top-6 md:hidden'>
              {open ?<AiOutlineClose size={30}/>  : <BiMenu size={30}/> }
            </div>

            {/* nav item */}
            <ul className={`md:flex md:items-center items-center md:pb-0 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 bg-white sm:bg-transparent sm:justify-center ${open ? 'top-12': 'top-[-490px]'}`}>
                {Links.map((items)=>
                    <li key={items.name} className='md:ml-8 md:my-8 mt-5 font-semibold text-xl border-b-2 md:border-b-0 text-right px-7 md:px-4 pb-4 md:pb-0 cursor-pointer '>
                       <Link to={Link.link}
                       activeClass='active'
                       smooth={true}
                       spy={true}
                       offset={-100}
                        className='text-red-950 hover:text-purple-700 duration-500 uppercase'> {items.name}</Link> 
                    </li>
                )}
            </ul>
        </div>
      </div>
    </>
  )
}
