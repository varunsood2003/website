import React from 'react'
import img from './wisdom.png'
import img2 from './CRYPTO.png'
import img3 from './keeper.png'
import img4 from './exp.png'
import img5 from './lottery.png'
import img6 from './bud.png'
import Aos from 'aos';
import { useEffect } from "react";
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
    {/* <svg id='project' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#002233" fill-opacity="1" d="M0,224L40,192C80,160,160,96,240,69.3C320,43,400,53,480,96C560,139,640,213,720,213.3C800,213,880,139,960,117.3C1040,96,1120,128,1200,149.3C1280,171,1360,181,1400,186.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg> */}
    <section id='project'  className=' bg-[#efeee9] '>
    <section className="text-gray-600 body-font">
      <div className='px-5'>
      <div  className='flex justify-center items-center'>
      <h1 data-aos="fade-up" className="sm:text-6xl text-3xl font-bold mb-4 text-[#0d2832] font-serif pt-24 pb-5">
              Projects
            </h1>
      </div>
  <div className="container px-5 py-5 mx-auto ">
    <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up">
        <div className="flex relative">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img3}/> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Blogging Website</h1>
            <p className="leading-relaxed">A dynamic blogging web application where individuals can share their thoughts and connect with others.</p>
            <p className="">Tech Stack: React js, Typescript, Cloudfare Workers, Hono, Prisma, PostgreSQL</p>
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mr-4 "><a href="https://github.com/varunsood2003/blog">Github</a> </button>
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mt-3"><a href="https://blog-azure-zeta-91.vercel.app/signin">Live Link</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up">
        <div className="flex relative">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img3}/> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">House Hunt</h1>
            <p className="leading-relaxed">Developed a real estate web app with the MERN stack for scalability and performance. Integrated real-time chat using Socket.io for instant communication with property owners. </p>
            <p className="">Tech Stack: React js, Node js, Express js, Prisma, Mongodb, socket.io</p>
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mr-4 "><a href="https://househunt-azure.vercel.app/">Live Link</a> </button>
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mr-4 "><a href="https://github.com/varunsood2003/HouseHunt">Github</a> </button>
            {/* <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mt-3"><a href="https://blog-azure-zeta-91.vercel.app/signin">Live Link</a> </button> */}
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up">
        <div className="flex relative">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img3}/> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Payments Webapp Clone</h1>
            <p className="leading-relaxed">Developed a payments webapp clone, Features include secure signup/login, user search, money transfer, JWT authentication.  </p>
            <p className="">Tech Stack: React js, Typescript, Mongodb, Node js, Express js</p>
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mr-4 "><a href="https://github.com/varunsood2003/payments_app_clone">Github</a> </button>
            {/* <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mt-3"><a href="https://blog-azure-zeta-91.vercel.app/signin">Live Link</a> </button> */}
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up">
        <div className="flex relative">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img}/> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Chat-App</h1>
            <p className="leading-relaxed">Developed a real-time chat application using React.js and used Firebase as the backend.</p>
            <p className="">Tech Stack: React js and Firebase</p>
            
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mt-3"><a href="https://lnkd.in/g6TsHWRt">Live Link</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up">
        <div className="flex relative">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img2}/> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Crypto World</h1>
            <p className="leading-relaxed">Built a web app that displays the prices of all the crypto currencies, could be a useful tool for keeping track of the value of various digital assets.</p>
            <p className="">Tech Stack: React js, Axios</p>
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mr-4 "><a href="https://github.com/varunsood2003/cryptoworld">Github</a> </button>
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mt-3"><a href="https://varunsood2003.github.io/cryptoworld/">Live Link</a> </button>
          </div>
        </div>
      </div>
      
      
      
      <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up">
        <div className="flex relative">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img5}/> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Sign-up</h1>
            <p className="leading-relaxed">The Email Sign-Up for Newsletter is a Node.js and Express-based web application that allows users to easily subscribe to a newsletter.</p>
            <p className="">Tech Stack: Nodejs, Expressjs</p>
            <button className="rounded-xl inline-flex text-white bg-[#007c89] border-0 py-1 px-6 focus:outline-none  text-lg mr-4 "><a href="https://github.com/varunsood2003/mail-signup">Github</a> </button>

          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
    </section>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#002233" fill-opacity="1" d="M0,224L40,202.7C80,181,160,139,240,101.3C320,64,400,32,480,42.7C560,53,640,107,720,128C800,149,880,139,960,112C1040,85,1120,43,1200,48C1280,53,1360,107,1400,133.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
</svg> */}
    </>
  )
}
