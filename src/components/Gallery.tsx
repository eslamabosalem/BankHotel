import Polygon from "../assets/gallery/Polygon 8.svg";
import space1 from "../assets/gallery/space-1.png";
import space2 from "../assets/gallery/space-2.png";
import space3 from "../assets/about/space-1.png";
import space4 from "../assets/gallery/space-4.png";
import space5 from "../assets/gallery/space-5.png";
import space6 from "../assets/gallery/space-6 (1).png";
import space7 from "../assets/gallery/space-7.png";
import space8 from "../assets/gallery/space8.png";

// Import React hooks and GSAP for animations
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const gallery = () => {

  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element


  // UseEffect to run animations when the component mounts
  useEffect(() => {
    // Create a GSAP context to scope animations to this component
    const ctx = gsap.context(() => {
      // Define GSAP animations with ScrollTrigger
      gsap.fromTo('.right1', 
        { x: -700, opacity: 0.3 }, 
        { x: 0, opacity: 1, duration: 2,delay:1, scrollTrigger: { trigger: '.right1', start: 'top 80%' } }
      );
      gsap.fromTo('.right2', 
        { x: 300 }, 
        { x: 0, duration: 2, delay:0.4, scrollTrigger: { trigger: '.right1', start: 'top 80%' } }
      );
      gsap.fromTo('.left1', 
        { x: -200,  }, 
        { x: 0,  duration: 2,delay:0.2, scrollTrigger: { trigger: '.left1', start: 'top 80%' } }
      );
      gsap.fromTo('.left2', 
        { x: -600  }, 
        { x: 0,  duration: 2.1, delay:0.2, scrollTrigger: { trigger: '.left1', start: 'top 80%' } }
      );
      gsap.fromTo('.top1', 
        { y: -100,  }, 
        { y: 0,  duration: 2.1,delay:0.2, scrollTrigger: { trigger: '.top1', start: 'top 80%' } }
      );
      gsap.fromTo('.bottom1', 
        { y: 100 }, 
        { y: 0,  duration: 2,delay:0.2, scrollTrigger: { trigger: '.bottom1', start: 'top 80%' } }
      );
      
    }, container);

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className=" py-20 px-2 lg:px-0  overflow-hidden">
      <div className=" lg:px-2">
        <div className=" ">
          <h1 className="left2 font-miracle text-6xl lg:text-8xl text-secondary text-center uppercase">
            our <br className=" lg:hidden" />
            Gallery
          </h1>
        </div>
        <div className=" mt-10">
          <p className="right2 font-poppins text-xs md:w-2/4 md:mx-auto lg:text-sm lg:w-[350px]  text-center lg:m-auto text-textWhite opacity-70 leading-6">
            Explore our spacious rooms with the gorgeous view to the historical
            part of the city. Each room has an exclusive interior design
            decorated with modern art pieces that will make your stay
            unforgettable.
          </p>
        </div>
      </div>

      <div className=" mt-14 relative pb-72 lg:px-2">
        <div className="left2 right-0 xl:pr-8  absolute z-10 lg:top-80 md:right-7 lg:-right-4 lg:w-[200px] lg:h-[160px]">
          <img src={space1} alt="" className=" w-full h-full object-contain" />
        </div>
        <div className="left1 right-0 xl:pr-3  absolute top-24 md:right-36 lg:right-1  lg:-top-10 opacity-10 lg:opacity-100 lg:w-56 lg:h-36">
          <img src={space2} alt="" className=" w-full h-full" />
        </div>
        <div className="bottom1 absolute w-40 h-52 top-16 md:left-28  lg:hidden">
          <img src={space3} alt="" />
        </div>
        <div className="left1 absolute top-44 w-48 h-64 right-16 md:right-60 z-10 lg:hidden">
          <img src={space4} alt="" />
        </div>
        <div className="bottom1 absolute top-[22rem] opacity-10 md:left-36 lg:left-0 lg:hidden">
          <img src={space5} alt="" />
        </div>
        <div className="right2 absolute  left-60 xl:left-96 w-[482px] h-[315px]  hidden lg:block">
          <img src={space6} alt="" className=" w-full h-full object-cover" />
        </div>
        <div className="top1 absolute top-96 lg:top-56 lg:w-[126px] lg:h-[170px] lg:pl-2  hidden lg:block">
          <img src={space7} alt="" />
        </div>
        <div className="bottom1 absolute   hidden lg:block lg:-top-10 lg:w-[290px] lg:h-[190px]  xl:pl-3">
          <img src={space8} alt="" />
        </div>
      </div>

      <div className=" px-1 pt-64 xl:pt-52  flex items-center md:justify-center lg:justify-normal gap-5 lg:-mt-36 lg:ml-[234px] xl:pl-36 lg:px-2">
        <img src={Polygon} alt="" className="right2" />
        <h4 className="right2 font-poppins text-base leading-5 text-textWhite opacity-75">
          It Is Our Pleasure To Meet Your <br />
          Most Unrealistic Expectations.
        </h4>
      </div>

      <div className=" hidden lg:block pt-64  overflow-hidden relative">
        <h1 className="right2   text-6xl -left-28 w-[2800px] absolute -mt-40  opacity-20 text-textWhite">
          Bank hotel <span className="  text-white opacity-100">Bank__hotel©</span> Bank
          hotel Bank hotel Bank hotel Bank hotel Bank hotel Bank hotel Bank
          hotel
        </h1>
        <h1 className="left1 text-6xl -left-12 w-[2800px] absolute -mt-20 text-textWhite opacity-20 ">
          Bank hotel Bank hotel Bank hotel Bank hotel Bank hotel Bank hotel Bank
          hotel Bank hotel Bank hotel
        </h1>
      </div>
    </section>
  );
};

export default gallery;
