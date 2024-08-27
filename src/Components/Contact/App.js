import React from "react";
import leetcode from "./leetcode.png";
import github from "./github.png";
import gfg from "./gfg.png";
import twitter from "./twitter.png";
import link from "./link.png";
import Aos from 'aos';
import image from "../bush.jpeg"
import { useEffect } from "react";
import 'aos/dist/aos.css';

export default function App() {
  useEffect(()=>{
    Aos.init({
      offset: 120,
      duration: 1000
    });
  },[]);

  return (
    <>
      <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} 
        id="contact"
        className="text-gray-600 bg-gradient-to-b from-[#0d2832] to-[#01242a] body-font relative"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 data-aos="fade-up" className="sm:text-6xl text-3xl font-bold mb-4 text-[#efeee8] font-serif  pb-5">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-[#e0e0e0]">
              Thank you for taking the time to visit my portfolio. If you're
              interested in working together or have a project in mind, let's
              connect! You can reach me through the contact form or by email.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white rounded-lg shadow-lg p-8">
            <form action="https://formspree.io/f/xqkoqrjv" method="POST" className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#007c89] focus:bg-white focus:ring-2 focus:ring-[#007c89] text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#007c89] focus:bg-white focus:ring-2 focus:ring-[#007c89] text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#007c89] focus:bg-white focus:ring-2 focus:ring-[#007c89] h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none transition-colors duration-200 ease-in-out"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-[#007c89] hover:bg-[#006d78] border-0 py-2 px-8 focus:outline-none rounded text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-300 text-center">
                <a href="mailto:soodvarun2003@gmail.com" className="text-[#007c89] font-semibold">
                  soodvarun2003@gmail.com
                </a>
                <p className="leading-normal my-5"></p>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/varun2003/"
                    className="ml-4 text-gray-500 hover:text-[#007c89] transition-colors duration-300"
                  >
                    <img className="w-10 " src={link} alt="LinkedIn" />
                  </a>
                  <a
                    href="https://leetcode.com/varunsood/"
                    className="ml-4 text-gray-500 hover:text-[#007c89] transition-colors duration-300"
                  >
                    <img className="w-10 " src={leetcode} alt="LeetCode" />
                  </a>
                  <a
                    href="https://auth.geeksforgeeks.org/user/soodvarun2003/"
                    className="ml-4 text-gray-500 hover:text-[#007c89] transition-colors duration-300"
                  >
                    <img className="w-10 " src={gfg} alt="GeeksForGeeks" />
                  </a>
                  <a
                    href="https://github.com/varunsood2003"
                    className="ml-4 text-gray-500 hover:text-[#007c89] transition-colors duration-300"
                  >
                    <img className="w-10 " src={github} alt="GitHub" />
                  </a>
                  <a
                    href="https://twitter.com/VarunSo62929244"
                    className="ml-4 text-gray-500 hover:text-[#007c89] transition-colors duration-300"
                  >
                    <img className="w-10 " src={twitter} alt="Twitter" />
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
