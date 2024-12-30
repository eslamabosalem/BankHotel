import bed from "../assets/room/bed.png";
import space from "../assets/room/space.png";
import star from "../assets/Star 8.svg";

// Import React hooks and GSAP for animations
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);


const Rooms = () => {

  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element


  // UseEffect to run animations when the component mounts
  useEffect(() => {
    // Create a GSAP context to scope animations to this component
    const ctx = gsap.context(() => {
      // Define GSAP animations with ScrollTrigger
      gsap.fromTo('.right1', 
        { x: -700, opacity: 0.3 }, 
        { x: 0, opacity: 1, duration: 2, scrollTrigger: { trigger: '.right1', start: 'top 80%' } }
      );
      gsap.fromTo('.right2', 
        { x: 300 }, 
        { x: 0, duration: 2.1, scrollTrigger: { trigger: '.right1', start: 'top 80%' } }
      );
      gsap.fromTo('.left1', 
        { x: -200, opacity: 0.3 }, 
        { x: 0, opacity: 1, duration: 2, scrollTrigger: { trigger: '.left1', start: 'top 80%' } }
      );
      gsap.fromTo('.left2', 
        { x: -600, opacity: 0.3 }, 
        { x: 0, opacity: 1, duration: 2.5, scrollTrigger: { trigger: '.left1', start: 'top 80%' } }
      );
      gsap.fromTo('.top1', 
        { y: -100, opacity: 0.3 }, 
        { y: 0, opacity: 1, duration: 2.5, scrollTrigger: { trigger: '.top1', start: 'top 80%' } }
      );
      gsap.fromTo('.bottom1', 
        { y: 100, opacity: 0.5 }, 
        { y: 0, opacity: 1, duration: 2, scrollTrigger: { trigger: '.bottom1', start: 'top 80%' } }
      );
     
    }, container);

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className=" mt-10 xl:pt-10 px-4 lg:pb-10 bg-textWhite">
      <div className=" py-16 lg:flex lg:justify-between">
        <h1 className="right2 lg:hidden text-end  font-poppins text-base text-black">
          70 rooms
        </h1>
        <h1 className="left1 mt-8 md:text-center lg:text-start  lg:mt-32 xl:mt-0 font-miracle uppercase text-6xl lg:text-8xl ">
          Rooms<br className=" hidden lg:block"/>& <br className=" lg:hidden"/>
          apartments
        </h1>
        <p className="right2 mt-10 md:mx-auto md:text-center lg:text-start xl:ml-56 xl:mt-14 lg:mt-0 text-xs lg:text-base leading-5 w-2/5 lg:w-52 opacity-80  font-poppins ">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>


      <div className="  relative lg:flex lg:flex-row-reverse">
        <div className="bottom1 md:h-[400px] lg:w-[456px] lg:h-[460px] xl:h-[520px]">
          <img src={bed} alt=""  className=" w-full h-full object-cover md:object-contain lg:object-cover"/>
        </div>
        
        <div className=" mt-10 xl:mt-52 lg:w-full">
        <div className="relative hidden xl:block   ">
          <div className="bottom1 w-56 h-64 absolute -top-40">
            <img src={space} alt=""  className=" w-full h-full object-cover"/>
          </div>
          
        </div>
        <div className="  hidden xl:block  ">
              <div className="top1 absolute -mt-32 xl:left-[440px]  w-60 h-16 border border-gray-500 border-opacity-90  rounded-full flex items-center gap-5  justify-center">
                <img src={star} alt="" className=" -ml-7" />
                <span className=" text-black font-poppins text-lg opacity-90">since 1973</span>
              </div>
            </div>
          <div className=" flex gap-3 items-center ml-[290px] xl:ml-[450px] md:ml-[336px] lg:ml-[240px]">
            <button className="left2 font-poppins text-base ">01</button>
            <span className="top1 text-link">/</span>
            <button className="right2 font-poppins text-base text-link">04</button>
          </div>
          <div className=" mt-5 lg:mt-12 xl:ml-48  lg:flex lg:justify-center">
            <h1 className="left1 font-miracle text-3xl lg:text-4xl md:text-center ">Superior twin</h1>
          </div>
          <div className=" left1 mt-12 lg:mt-16  flex justify-between  md:flex-col lg:flex-row  md:gap-8  ">
            <button className=" md:mx-auto    mt-1  xl:mt-5 xl:ml-16 flex items-center justify-center w-16 lg:w-24 h-16 lg:h-24 border border-gray-400 rounded-full hover:bg-gray-100">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <p className="bottom1 md:mx-auto md:text-center lg:text-start font-poppins text-xs lg:text-sm text-gray-700 opacity-90 lg:opacity-80 w-2/3 lg:w-64 leading-6 xl:leading-7 lg:mr-[185px] xl:mr-[194px]  xl:-mt-3">
              The Superior twin is perfect for those who plan to stay long. The
              spacious and bright room is equipped with deluxe Italian furniture
              and has a beautiful view to the historical part of the city.
              Stylish interior design and comfortable beds will make your stay
              cozy and pleasant.
            </p>
          </div>
        </div>
      </div>

      <hr  className=" mt-20 xl:h-1 lg:px-4 xl:text-black text-primary opacity-70 "/>
    </section>
  );
};

export default Rooms;
