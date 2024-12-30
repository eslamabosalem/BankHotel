// Import React hooks and GSAP for animations
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element


  // UseEffect to run animations when the component mounts
  useEffect(() => {
    // Create a GSAP context to scope animations to this component
    const ctx = gsap.context(() => {
      // Define GSAP animations with ScrollTrigger
     
      gsap.fromTo('.right2', 
        { x: 300,opacity: 0 }, 
        { x: 0,opacity: 1, duration: 2, delay:1, scrollTrigger: { trigger: '.right1', start: 'top 80%' } }
      );
      gsap.fromTo('.left1', 
        { x: -400,opacity: 0  }, 
        { x: 0, opacity: 1, duration: 2,delay:0.1, scrollTrigger: { trigger: '.left1', start: 'top 80%' } }
      );
    
      
    }, container);

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);
  return (
      <footer ref={container} className="block bg-textWhite">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className=" flex-col flex items-center">
          <a href="#" className="right2 mb-8 inline-block font-miracle font-semibold text-5xl max-w-full text-black">
          Bank <span className=" text-secondary ">Hotel</span>
          </a>
          <div className="text-center font-semibold">
            <a
              href="#"
              className="left1 inline-block px-6 py-2 font-medium font-poppins text-sm lg:text-lg text-gray-600   transition hover:text-linkHover"
            >
              About
            </a>
            <a
              href="#"
              className="left1 inline-block px-6 py-2 font-medium font-poppins text-sm lg:text-lg text-gray-600  transition hover:text-linkHover"
            >
              Features
            </a>
            <a
              href="#"
              className="left1 inline-block px-6 py-2 font-medium font-poppins text-sm lg:text-lg text-gray-600  transition hover:text-linkHover"
            >
              Works
            </a>
            <a
              href="#"
              className="left1 inline-block px-6 py-2 font-medium font-poppins text-sm lg:text-lg text-gray-600 transition hover:text-linkHover"
            >
              Support
            </a>
            <a
              href="#"
              className="left1 inline-block px-6 py-2 font-medium font-poppins text-sm lg:text-lg text-gray-600  transition hover:text-linkHover"
            >
              Help
            </a>
          </div>
          <div className="mb-8 mt-8 border-b border-gray-500 w-48 lg:w-56"></div>
          
          <p className="right2 text-sm sm:text-base text-gray-600 lg:text-lg font-medium font-poppins  leading-6 ">
            © Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer