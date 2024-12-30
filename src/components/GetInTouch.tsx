import icon from "../assets/icon.svg";
import arrow from "../assets/S-arrow.svg";
import jean from "../assets/getTouch/jean.png";

// Import React hooks and GSAP for animations
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {

  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element


  // UseEffect to run animations when the component mounts
  useEffect(() => {
    // Create a GSAP context to scope animations to this component
    const ctx = gsap.context(() => {
      // Define GSAP animations with ScrollTrigger
      
      gsap.fromTo('.right2', 
        { x: 400 }, 
        { x: 0, duration: 3, delay:3, scrollTrigger: { trigger: '.right1', start: 'top 80%' } }
      );
      gsap.fromTo('.left1', 
        { x: -200,  }, 
        { x: 0,  duration: 2,delay:1, scrollTrigger: { trigger: '.left1', start: 'top 80%' } }
      );
      gsap.fromTo('.left2', 
        { x: -600  }, 
        { x: 0,  duration: 3, delay:2, scrollTrigger: { trigger: '.left1', start: 'top 80%' } }
      );
      gsap.fromTo('.top1', 
        { y: -100,  }, 
        { y: 0,  duration: 2.1,delay:1, scrollTrigger: { trigger: '.top1', start: 'top 80%' } }
      );
      gsap.fromTo('.bottom1', 
        { y: 100 }, 
        { y: 0,  duration: 3,delay:1.5, scrollTrigger: { trigger: '.bottom1', start: 'top 80%' } }
      );
      
    }, container);

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className=" pt-20 pb-10  lg:pt-36 lg:pb-14 px-2 bg-textWhite overflow-hidden">
      <div className="px-2">
        <h1 className=" bottom1 font-poppins  text-xl md:text-center lg:text-center lg:text-2xl  underline leading-5 font-medium">
          +38 032 297 50 20
        </h1>
        <h3 className="bottom1 mt-20 md:mt-10 lg:mt-20 text-end font-poppins uppercase md:text-center  font-medium text-lg  leading-5">
          8 Lystopadovoho <br className="" />
          Chynu,Lviv
        </h3>
      </div>

      <div className=" mt-12 md:mt-20 lg:mt-48 ">
        <div className=" flex items-center md:justify-center lg:justify-normal  gap-3 lg:gap-5">
          <h1 className="right2 font-miracle uppercase   text-[84px] lg:text-[150px] xl:text-[190px] xl:pl-10 leading-10 ">
            Get in
          </h1>
          <img src={icon} alt="" className=" w-9 h-9 lg:w-16 lg:h-16" />
        </div>
        <h1 className="left2 z-10 relative md:text-center lg:text-end mt-12 xl:mb-20 lg:mt-32 xl:pr-12 xl:text-[190px] text-secondary font-miracle uppercase  text-[84px]  lg:text-[150px] leading-10 text-end">
          Touch
        </h1>
        <div className=" relative w-40 h-40   lg:w-60 lg:h-60 ml-auto md:mx-auto lg:ml-auto  lg:left-48 xl:right-44 lg:-top-72 xl:-top-80">
          <img
            src={jean}
            alt=""
            className="bottom1 absolute  w-full h-full object-cover "
          />
        </div>
        <div className="md:hidden -mt-9 ">
          <button className="   flex items-center justify-center w-32 h-32 border bg-secondary rounded-full hover:bg-[#fcd143c9] transition-all">
            <h1 className="top1 font-poppins italic text-sm leading-4 ">
              Book room
            </h1>
          </button>
        </div>
      </div>

      <div className=" hidden lg:block px-3 -mt-28 xl:-mt-36">
        <h4 className="right2 text-lg leading-5 font-poppins uppercase font-medium">
          {" "}
          Find a room
        </h4>
        <div className="top1 w-[608px] mt-5 h-24 flex items-center  border border-black">
          <div className=" flex justify-center items-center gap-5  w-[202px] h-full">
            <h1 className=" text-sm leading-5 font-poppins font-medium">
              Check out
            </h1>
            <img src={arrow} alt="" />
          </div>
          <div className=" flex justify-center items-center gap-5  w-[202px] h-full">
            <h1 className=" text-sm leading-5 font-poppins font-medium">
              Check in
            </h1>
            <img src={arrow} alt="" />
          </div>
          <div className="  flex justify-center items-center text-textWhite bg-primary  w-[202px] h-full">
            <h1 className="bottom1 font-medium font-poppins text-base leading-5 ">
              book room
            </h1>
          </div>
        </div>
      </div>

      <hr className=" mt-20 lg:mt-12 px-1 text-black border w-full mx-auto" />
    </section>
  );
};

export default GetInTouch;
