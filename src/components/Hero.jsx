// Hero.jsx
import { useEffect, useRef } from 'react';
import heroImg from '/hero-img.png'
import gsap from 'gsap';
import Dialog from './Dialog';
const Hero = () => {
  const dialogref = useRef()
  useEffect(()=>{
    gsap.fromTo('.herosection > *',
      {opacity:0,x:100},
      {opacity:1,
        x:0,
        duration:1,
        stagger:0.3,
        ease: 'power3.out' }
    )
  },[])
    return (
      <div className="bg-primary pt-10 bg-hero-pattern bg-cover hero">

          <div className="flex items-center lg:flex-row flex-col justify-between px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">

            {/* Left Section */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-left items-center lg:items-start flex flex-col herosection">
              <div className="bg-btn_bg text-btn_txt inline-block rounded-full px-4 py-1 mb-4 w-fit font-bold">
               DYVOS
              </div>
              <h1 className="text-white text-4xl font-bold mb-4 text-center lg:text-left">
              Innovative Software Solutions for Your Business Success
              </h1>
              <p className="text-white mb-6 text-center lg:text-left">
              Empowering companies with tailored software solutions to optimize performance, enhance efficiency, and drive growth.
              </p>
              <div>
                <a
                  href="#"
                  className="bg-btn_bg text-btn_txt px-6 py-3 rounded-full mr-4 shadow hover:bg-gray-200"
                >
                  Read More
                </a>
                <span
                 onClick={()=>dialogref.current.show()}
                  className="border border-white text-white px-6 py-3 rounded-full shadow hover:bg-white hover:text-blue-600 cursor-pointer"
                >
                  Contact Us
                </span>
                <Dialog 
                ref={dialogref}
                />
              </div>
            </div>

            {/* Right Section */}
            {/* <div className="w-96 h-96 lg:w-1/2 text-center overflow-hidden">
              <img
                className="w-full h-full rounded-t-md object-cover object-top"
                src={heroImg}
                alt="Hero"
              />
            </div> */}
            <div className="lg:w-1/2 text-center ">
              <img
                className="w-full h-full rounded-t-md object-cover "
                src={heroImg}
                alt="Hero"
              />
            </div>

          </div>
      </div>
    );
  };
  
  export default Hero;
  