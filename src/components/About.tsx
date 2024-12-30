import space1 from "../assets/about/space-1.png";
import space2 from "../assets/about/space-2.png";
import Vector from "../assets/about/Vector 15.svg";
import Vector2 from "../assets/about/Ellipse 18.svg";
import Vector3 from "../assets/about/Vector 6.svg";

// Import React hooks and GSAP for animations
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {

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
        { x: 300  }, 
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
    <section ref={container} className="mt-36 px-2 lg:pb-32 lg:px-4 relative">
      <img
        src={Vector}
        alt=""
        className="right1 absolute right-0 -top-16 md:w-[490px] lg:w-[630px] xl:w-[739px]"
      />
      <img
        src={Vector2}
        alt=""
        className="top1 absolute -top-16 md:w-[520px] lg:w-[752px] lg:h-[378px] xl:w-[1078px]"
      />
      <img
        src={Vector3}
        alt=""
        className="right2 absolute  right-[108px] md:right-[240px] md:h-[630px] lg:right-[259px] xl:right-[334px] lg:h-[830px] -top-16 "
      />

      <div className=" lg:flex lg:gap-32 ">
        <div className=" relative lg:pt-1 ">
          <h1 className="left2 px-1 lg:absolute lg:top-32 lg:left-44 xl:left-72 lg:z-50 font-miracle text-6xl lg:text-8xl text-secondary uppercase">
            About
            <br />
            <h1 className=" ml-[120px] lg:text-textWhite lg:text-end">US</h1>
          </h1>
          <div className="left1 mt-16  h-[355px] md:px-1 md:h-[430px] lg:h-[530px] lg:w-[357px] lg:mx-0 lg:mr-auto mx-auto  relative z-10">
            <img src={space1} alt="" className=" w-full h-full object-cover md:object-contain " />
          </div>
        </div>
        <div className=" mt-16 lg:self-end	">
          <h1 className="top1 text-textWhite text-3xl lg:text-2xl lg:text-start xl:text-3xl opacity-90 md:text-center  font-miracle">
            High quality
          </h1>
          <p className="right2 font-poppins text-sm xl:leading-6  lg:text-xs text-textWhite mt-6 opacity-80 w-[290px] md:mx-auto md:text-center lg:text-start">
            The hotel was reopened to visitors in 2016. The building was
            renovated and modernized to meet the expectations of the most
            demanding guests. We offer luxurious rooms, numerous facilities, and
            exceptional service. The hotel is located near the city center,
            which makes it the best option for those who travel for business and
            travel purposes.
          </p>
        </div>
      </div>

      <div className=" hidden lg:block">
        <div className="right2 w-40 h-52 md:px-4 md:h-64 absolute right-0 top-0 mt-[4.5rem] pr-2">
         <img src={space2} alt=""  className="    "/>

        </div>
      </div>
      <div className=" hidden xl:block ">
         <button className="right2 absolute right-28 bottom-32  flex flex-col gap-2 items-center justify-center w-36 h-36 border border-gray-400 rounded-full hover:bg-linkHover">
          <div className=" flex flex-col">
            <span className=" text-secondary italic text-sm font-poppins">Rooms</span>
            <span className=" text-textWhite italic font-poppins text-sm">and <br />apartments</span>
          </div>
              <svg
                className="w-5 h-5 text-secondary rotate-90"
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
    </section>
  );
};

export default About;
