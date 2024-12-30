import michael from "../assets/facilities/michael.png";
import sunrise from "../assets/facilities/sunrise.png";
import star from "../assets/Star 8.svg";
import space1 from "../assets/facilities/space-jw-5-17-arcit18 1 (2).png";
import space2 from "../assets/facilities/space-jw-5-17-arcit18 1 (1).png";
import space3 from "../assets/facilities/space-jw-5-17-arcit18 1 (3).png";
import arrow from '../assets/arrow.svg'  

// Import React hooks and GSAP for animations
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
  
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
        { x: 0, duration: 2, scrollTrigger: { trigger: '.right1', start: 'top 80%' } }
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
      gsap.fromTo('.btn', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.btn', start: 'top 80%' } }
      );
    }, container);

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className=" py-20 lg:px-4  bg-textWhite">
      <div className=" relative ">
        <h1 className=" right2 absolute left-64 md:right-4 lg:right-0 xl:text-start xl:left-0 font-poppins text-base leading-5 text-end -top-5 ">
          Art & Congress
          <br />
          halls
        </h1>
        <div className="  grid place-content-center">
          <h1 className="top1 font-miracle text-6xl md:text-7xl lg:text-8xl leading-[60px] uppercase ml-4 lg:ml-20">
            Our <br /> faci
          </h1>
          <div className=" flex items-center justify-center lg:ml-28">
            <img
              src={star}
              alt=""
              className="top1 mr-6 w-12 h-12 inline-block ml-12"
            />
            <h1 className="bottom1 font-miracle text-6xl md:text-7xl lg:text-8xl  leading-[60px] uppercase">
              lities
            </h1>
          </div>
        </div>
        <div className=" hidden xl:block absolute w-80 h-56 right-0 top-5">
          <img src={sunrise} alt=""  className="left1 object-cover w-full h-full"/>
        </div>
        <div className=" mt-10 lg:mt-16 xl:mt-28  flex justify-center  lg:justify-start  lg:w-60 xl:w-[335px] h-[216px] items-center">
          <img src={michael} alt="" className="top1 w-full h-full  object-contain lg:object-cover"/>
        </div>

        <div className=" mt-14 lg:-mt-28  xl:-mt-52 ml-auto mx-auto text-center lg:text-start  lg:mx-auto w-1/2 lg:w-64 ">
          <p className="right2 font-poppins text-sm xl:text-md xl:leading-8 leading-4 lg:leading-7 opacity-80 ">
            Bank Hotel offers you a wide range of additional services and
            facilities. Visit our restaurant to try exclusive meals, book a
            conference hall to organize a business meeting, or relax in the
            art-bar.{" "}
          </p>
        </div>
      </div>


      <div className="px-4 lg:px-2 mt-16 lg:mt-28 lg:flex lg:flex-row-reverse">
        
        <div className=" md:h-[400px] lg:w-[506px] lg:h-[500px]">
          <img src={space1} alt=""  className="left1 w-full h-full object-cover md:object-contain lg:object-cover"/>
        </div>


        <div className=" w-full  mt-10  relative flex justify-between  md:justify-center lg:justify-start md:gap-20 lg:gap-36">
          <span className="bottom1 absolute font-miracle text-3xl leading-6 md:mt-2 md:right-[510px] lg:right-[360px] xl:right-[490px] xl:mt-16 ">01</span>
           <div className=" flex flex-col justify-center">
           <button className="left1 mt-1 md:mt-16 lg:mt-1 xl:mt-28  flex items-center justify-center w-16 lg:w-28 h-16 lg:h-28 xl:ml-20 border border-gray-400 rounded-full hover:bg-gray-100">
              <svg
                className="w-5 h-5 text-gray-600 rotate-90"
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
           </div>
           <div className=" lg:flex lg:flex-col lg:items-center lg:justify-center  lg:mt-28">
            <h1 className="bottom1 font-miracle text-3xl lg:text-4xl leading-6 self-start">Ice <br />
            restaurant</h1>
            <p className="right2 mt-6 font-poppins text-sm leading-5 w-56 opacity-80">
            The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.
            </p>
           </div>
        </div>
      </div>


      <div className=" mt-16">

        <div className=" relative flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="  ">
            <div className=" w-40 h-40 xl:w-52 xl:h-52 ">
              <img src={space2} alt=""  className="right2 w-full h-full object-cover"/>
            </div>
            <span className="bottom1 absolute top-0 lg:top-[70px]   xl:top-24 right-0 lg:left-64 xl:left-96 font-miracle text-3xl leading-6">02</span>
          </div>
          <div className=" mt-4 lg:mt-0">
            <h1 className="left2 font-miracle text-center text-2xl lg:text-4xl lg:leading-9 leading-5">conference hall</h1>
          </div>
          <div className="top1 hidden lg:block ">
            <img src={arrow} alt="" />
          </div>
        </div>
        <hr  className=" mt-20 px-1 text-black border w-full mx-auto"/>

        <div className="relative flex flex-col items-center lg:flex-row lg:justify-between mt-20">
        <div className="">
            <div className=" w-40 h-40 xl:w-52 xl:h-52">
              <img src={space3} alt=""   className="right2 w-full h-full object-cover"/>
            </div>
            <span className="bottom1 absolute top-0 lg:top-[70px] xl:top-24 right-0 lg:left-64 xl:left-96 font-miracle text-3xl leading-6">03</span>
          </div>
          <div className=" mt-4 lg:mt-0">
            <h1 className="left2 font-miracle text-center text-2xl lg:text-4xl lg:leading-9 leading-5">Wine bar “reserve”</h1>
          </div>
          <div className="top1 hidden lg:block">
            <img src={arrow} alt="" />
          </div>
        </div>

        <hr  className=" mt-20 px-1 text-black border w-full mx-auto"/>
      </div>

      
    </section>
  );
};

export default Facilities;
