import React from 'react';
import linkedIn from '../asessts/socials/linkedin.svg';
import github from '../asessts/socials/github.svg';
import twitter from '../asessts/socials/twitter.svg';
import youtube from '../asessts/socials/youtube.svg';

export default function Footer() {
  return (
    <>
        <div className='bg-black md:h-96 px-7'>
            <div className='max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between'>
                <div className='md:w-2/5 my-3 '>
                    <h4 className='text-white font-bold text-2xl tracking-wide'>AWADHESH YADAV</h4>
                    <p className='mt-5 text-sm leading-7 text-[#eee]'>A frontend focused web Developer building hte frontend of websites and web Application that leads to the success of the overall products.</p>
                </div>
                {/* social icons */}
                <div className='my-3'>
                    <h4 className='text-white font-bold text-2xl tracking-wide'>SOCIAL</h4>
                    <div className='flex mt-5  gap-3'>
                        <a href='' className='ml-1' >
                            <img src={linkedIn} alt='' className='w-7 h-7 bg-white rounded'/> 
                        </a>
                        <a href='' className='ml-1' >
                            <img src={github} alt='' className='w-7 h-7 bg-white rounded'/> 
                        </a>
                        <a href='' className='ml-1' >
                            <img src={youtube} alt='' className='w-7 h-7 bg-white rounded'/> 
                        </a>
                        <a href='' className='ml-1' >
                            <img src={twitter} alt='' className='w-7 h-7 bg-white rounded'/> 
                        </a>
                    </div>
                </div>
            </div>
            <hr className='text-white opacity-30 px-7'/>
            <div className='md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center'>
                <p>Copyright 2023. Made by Awadhesh Yadav</p>
            </div>
        </div>
    </>
  )
}
