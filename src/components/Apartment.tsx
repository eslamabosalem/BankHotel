import space2 from '../assets/Apartment/space2.png'
import victor from '../assets/Apartment/Vector 16.svg'

// Import React hooks and GSAP for animations
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);
const Apartment = () => {

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
        { x: 300, opacity: 0.3 }, 
        { x: 0, opacity: 1, duration: 2, scrollTrigger: { trigger: '.right1', start: 'top 80%' } }
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
    <section ref={container}  className="box relative h-[890px] lg:h-[650px] xl:h-[750px] bg-no-repeat bg-cover  " style={{ backgroundImage: `url(${space2})` }}>
   
     <div className=" pt-12 pl-2">
      <h1 className='right2 font-miracle uppercase text-6xl lg:text-8xl lg:px-3 leading-[60px] text-yellow-500 xl:mt-16'>Best<br />
      apartments</h1>
     </div>
     <div className=" w-full absolute bottom-[260px]  lg:bottom-16 xl:bottom-10 right-1">
      <img src={victor} alt=" " className='bottom1 w-full' />
     </div>
    
    
     <div className="  flex justify-end lg:justify-start mt-[560px] lg:mt-48  lg:px-4">
      <p className='right1 text-yellow-500 shadow-lg font-medium  font-poppins text-lg leading-7 w-52 '>All room decoration was made with ecological certified and safe materials.</p>
     </div>
  </section>
  )
}

export default Apartment