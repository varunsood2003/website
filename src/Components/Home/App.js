import React, { useEffect } from 'react'
import logo from './home.png'
import './style.css';
import Aos from 'aos';
import Line from './Line';
//import { useEffect } from "react";
import 'aos/dist/aos.css'
export default function App() {
  useEffect(()=>{
    Aos.init({
      offset: 120,
      duration: 1000
    });
  },[]);
  return (
    <>
    <section className="text-[#001d28] bg-[#efeee9] h-3/4 ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" >
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
            <h1 className="text-[#001d28] tapered title-font sm:text-8xl text-5xl mb-4 font-medium "><span className='font-link'>Hey!</span> <span className='text-[#001d28] font-link'>I'm</span>
                <br className=" lg:inline-block "/> <span className='text-[#2F454D] '>Varun</span> <span className='text-[#2F454D]'>Sood</span> 
            </h1>
            <p  className="mb-8 leading-relaxed">PROGRAMMER | DEVELOPER</p>
            <div className="flex justify-center">
                <a href='#contact' className=" inline-flex text-[#efeee9] font-bold bg-[#007c89] py-2 px-6 focus:outline-none text-lg ">Contact me</a>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
            <img data-aos="fade-up" className="object-cover object-center rounded" alt="hero" src={logo}/>
            </div>
        </div>
        <Line/>
    </section>
    </>
  )
}
