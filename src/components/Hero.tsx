import room from "../assets/hero/room.jpg";
import arrow from "../assets/S-arrow.svg";
import star from "../assets/Star 8.svg";
import { useRef } from "react"; // Import React hooks
import gsap from 'gsap'; // Import GSAP for animations
import { useGSAP } from "@gsap/react";

const Hero = () => {
  // Explicitly type the ref as HTMLDivElement | null
  const container = useRef<HTMLDivElement>(null);;

 
  useGSAP(() => {
      // gsap code 
      gsap.fromTo('.text', { x: -200 , opacity: 0.1 }, { x: 0 , opacity: 1 , duration: 2.5 });
      gsap.fromTo('.bottom1', { y: 400 , opacity: 0.5 }, { y: 0 , opacity: 1 , duration: 3 });
      gsap.fromTo('.box', { x: 200 , opacity: 0.3 }, { x: 0 , opacity: 1 , duration: 2.5 });
      gsap.fromTo('.box1', { x: -200 }, { x: 0 , duration: 3 });
    }, { scope: container });

  return (
    <section ref={container} className="mt-4 lg:mt-10 xl:mt-16 lg:px-4">
      <div className="lg:flex lg:gap-28">
        <div className="text-center lg:text-start lg:w-[533px]">
          <h1 className="text font-miracle text-[80px] lg:text-9xl text-textWhite">
            Bank<span className="text-secondary">Hotel</span>
          </h1>
          <h5 className="text mt-3 lg:mt-5 uppercase font-poppins text-xs lg:ml-1 sm:text-sm text-secondary opacity-80">
            rooms // restaurant // congress hall // wine bar
          </h5>
        </div>
        <hr className="w-2/3 m-auto mt-8 opacity-50 md:hidden" />
        <div className="mt-7 xl:mt-3 lg:w-full lg:flex xl:flex-col lg:gap-16">
          <div className="hidden lg:block xl:flex xl:justify-around">
            <div className="hidden xl:block box">
              <div className="w-60 h-16 border border-opacity-60 rounded-full flex items-center gap-5 justify-center">
                <img src={star} alt="" className="-ml-7" />
                <span className="text-textWhite font-poppins text-lg opacity-90">since 1973</span>
              </div>
            </div>
            <button className="box1 mt-1 flex items-center justify-center w-11 h-11 border border-gray-400 rounded-full hover:bg-linkHover">
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
          <p className="box1 text-center w-fit lg:max-w-lg lg:px-4 xl:mx-auto px-8 text-sm md:max-w-md md:mx-auto text-textWhite opacity-60">
            The luxurious hotel in the most beautiful European city with an
            exclusive restaurant, conference-hall, and art-bar.
          </p>
        </div>
      </div>

      <div className="relative mt-8 lg:mt-10">
        <div className="bottom1 h-[455px] w-[355px] md:w-full md:px-4 lg:w-full lg:h-[487px] xl:h-[580px] xl:px-0 mx-auto overflow-hidden">
          <img
            src={room}
            alt="Spacious Copenhagen room"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        <div className="bottom1 hidden lg:block absolute -mt-[95px] xl:-mt-[582px] -right-0">
          <div className="w-[858px] h-24 flex items-center border border-transparent">
            <div className="flex justify-center items-center gap-12 text-textWhite uppercase w-[286px] h-full bg-[#5355547a]">
              <h1 className="text-sm leading-5 font-poppins font-medium">
                Check out
              </h1>
              <img src={arrow} alt="" />
            </div>
            <div className="flex justify-center items-center gap-12 text-textWhite uppercase w-[286px] h-full bg-[#5355547a]">
              <h1 className="text-sm leading-5 font-poppins font-medium">
                Check in
              </h1>
              <img src={arrow} alt="" />
            </div>
            <div className="flex justify-center items-center text-black bg-secondary uppercase w-[290px] h-full">
              <h1 className="font-medium font-poppins text-base leading-5">
                book room
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-5 lg:px-0 lg:flex lg:justify-between flex-row-reverse">
        <div>
          <span className="font-poppins text-sm xl:text-lg italic opacity-80 text-textWhite w-[117px] leading-5">
            Art & Congress <br />
            hall
          </span>
        </div>
        <div className="hidden lg:block">
          <h4 className="box text-secondary font-poppins text-lg leading-5">+38 032 297 50 20</h4>
          <h1 className="box font-poppins text-lg leading-5 text-textWhite mt-3">8 Lystopadovoho Chynu,Lviv</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
