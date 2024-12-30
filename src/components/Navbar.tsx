import { useState, useRef } from "react"; // Import React hooks
import gsap from 'gsap'; // Import GSAP for animations
import { useGSAP } from '@gsap/react'; // Import GSAP React plugin
import Rectangle from "../assets/navbar/Rectangle 128 (2).svg";
import close from "../assets/navbar/close.svg";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  useGSAP(
    () => {
        // gsap code 
        gsap.fromTo('.logo', { x: 200   }, { x: 0  ,duration:3});
        gsap.fromTo('.link ', { x: 100  }, { x: 0  ,duration:3});
    },
    { scope: container }
);
  return (
    <nav ref={container} className="relative flex items-center justify-between pt-9">
      <div className="px-4 logo">
        <a
          href="/"
          className="font-poppins font-medium text-base xl:text-xl text-textWhite transition-all hover:text-linkHover cursor-pointer mt-2"
        >
          BankHotel
        </a>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-4 xl:hidden">
        <button className="border-none outline-none" onClick={() => setOpen(!open)}>
          <img src={Rectangle} alt="" className="w-9 h-6" />
        </button>
      </div>

      <div className="hidden xl:block px-4">
        <ul className="link flex items-center gap-5">
          {['Home', 'About', 'Rooms', 'Restaurant', 'Conference hall', 'Contacts'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="font-poppins text-sm text-gray-100 transition-all hover:text-linkHover"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="link hidden xl:block px-4 ">
        <span className="font-poppins text-sm text-gray-100 transition-all cursor-pointer hover:text-linkHover">
          +38 032 297 50 20
        </span>
      </div>

      {open && (
        <div className="absolute w-full bg-primary xl:hidden z-30 pt-16 transition-all mt-80">
          <div className="flex items-center justify-between pl-4 pt-[16rem] lg:mt-28">
            <a
              href="/"
              className="font-poppins font-medium text-base lg:text-xl text-textWhite transition-all hover:text-linkHover cursor-pointer"
            >
              BankHotel
            </a>
            <button className="border-none outline-none" onClick={() => setOpen(!open)}>
              <img src={close} alt="" className="w-24 h-6 lg:w-28 lg:h-8" />
            </button>
          </div>

          <div className="pl-4 mt-12">
            <ul className="flex flex-col gap-7 lg:gap-12 md:text-center">
              {['Home', 'About', 'Rooms', 'Restaurant', 'Conference hall', 'Contacts'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-poppins text-3xl leading-8 text-textWhite transition-all hover:text-linkHover opacity-80"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-16">
            <h1 className="text-center font-poppins text-xl text-textWhite underline opacity-80">
              +38 032 297 50 20
            </h1>
            <h1 className="mt-8 text-center font-poppins text-lg leading-5 lg:ml-6 text-textWhite uppercase opacity-80">
              8 Lystopadovoho Chynu, Lviv
            </h1>

            <div className="flex items-center justify-around mt-7">
              {['facebook', 'instagram', 'twitter'].map((item) => (
                <div key={item}>
                  <a
                    href="#"
                    className="font-poppins text-xs lg:text-lg font-medium text-textWhite uppercase transition-all hover:text-linkHover opacity-80"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
