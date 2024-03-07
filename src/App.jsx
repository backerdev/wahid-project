import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

import mee from "./assets/mee.png";
import combo1 from "./assets/COMBO_1.png";
import hero_banner from "./assets/Rojak_01.png";
import deco from "./assets/deco.png";
import banner from "./assets/banner.jpg";
import owner from "./assets/owner.png";
import { CiLocationOn } from "react-icons/ci";
function App() {
  return (
    <div className=" flex flex-col     items-center  justify-between  relative">
      <nav className=" h-full items-center w-full  px-4 py-2 max-w-[1140px] mx-auto flex justify-between relative md:flex-row flex-col gap-2  ">
        <h2 className="group font-extrabold text-3xl md:text-2xl text-yellow-900 ">
          H&W FAMILY INDIAN ROJAK{" "}
          <div className="flex items-center  text-sm  hover:font-semibold font-light cursor-auto ">
            <CiLocationOn className="group-hover:text-yellow-500  group-hover:animate-pulse text-3xl" />{" "}
            <h2 className="uppercase group-hover:animate-pulse text-xl">
              4A eunos crescent #01-14{" "}
            </h2>
          </div>
        </h2>
        <div className="flex gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=61556601464867"
            target="_blank"
            className="w-10 h-10 bg-blue-600 rounded-full cursor-pointer  transition-all flex justify-center items-center text-2xl overflow-hidden hover:text-3xl hover:bg-transparent hover:text-blue-600 shadow-xl hover:shadow-inner"
          >
            {" "}
            <FaFacebook />
          </a>
          <a
            target="_blank"
            className="w-10 h-10 bg-pink-700 rounded-full cursor-pointer  transition-all flex justify-center items-center text-2xl overflow-hidden hover:text-3xl hover:bg-transparent hover:text-pink-800 shadow-xl hover:shadow-inner"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/06585353695?text=Do%20you%20still%20have%20Rojak"
            target="_blank"
            className="w-16 h-16 animate-bounce fixed z-30 md:bottom-0  ml-10 right-0 mb-10 mr-10 rounded-full cursor-pointer  transition-all flex justify-center items-center  overflow-hidden  bg-green-600 "
          >
            <FaWhatsapp
              size={48}
              className=" text-yellow-900 hover:text-yellow-50 scale-95 transition-all shadow-xl hover:shadow-inner"
            />
          </a>
        </div>
      </nav>
      <main className="mx-auto max-w-[1140px] w-full">
        {/* Hero */}
        <section className=" h-[250px] overflow-hidden bg-[#f9a339] bg-fixed relative z-10 flex justify-center items-center">
          <div className="flex justify-between items-center   relative z-10">
            <img
              src={deco}
              className=" animate-spin-slow z-10 absolute  w-[250px]  "
            />
            <img src={hero_banner} className=" w-48   " />
          </div>

          <div className="w-[50%]  h-full bg-white absolute top-0  left-0 z-10 flex justify-end items-center">
            <span className="text-3xl font-semibold  w-[150px]">
              THE BEST <span className="text-orange-600">ROJAK</span> IN TOWN
            </span>
          </div>
        </section>
        <div className="w-full h-10 bg-yellow-900"></div>
        {/* Card */}
        <section className="shadow-lg px-4 py-16 relative  overflow-hidden ">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="font-extrabold text-3xl mb-4 text-yellow-900">
              ALL ABOUT US
            </h2>
            <p className="max-w-xl font-thin text-lg text-yellow-900 ">
              Over 30 years have passed since the establishment of our main
              stall at Eunos. We're going to keep going since the flavour and
              our desire to serve have never changed.Come and try our food and
              join us on our adventure!
              <img
                src={owner}
                className="absolute top-0 right-0 h-96 z-0 md:block hidden"
              />
            </p>
          </div>
        </section>
        {/* Card */}
        <section className="flex flex-col md:flex-row mt-10 px-4 py-6  justify-center items-center gap-2 ">
          {/* CARDS */}
          {/* CARDS */}
          <div className="md:order-2  cursor-pointer  shadow-lg hover:shadow-yellow-500   ">
            <img
              src={banner}
              className=" object-contain  md:object-fill md:h-[150px]   "
            />
          </div>
          <div className="order-1 cursor-pointer flex flex-col justify-center items-center w-[175px]   shadow-lg hover:shadow-yellow-500  md:h-[250px] relative ">
            <span className="uppercase font-semibold flex justify-center items-center  absolute bottom-0  left-0  text-2xl px-2 py-4 bg-yellow-400 rounded-r-full">
              COMBO
            </span>
            <img src={combo1} className=" w-48" />
          </div>

          {/* CARDS */}
          <div className="order-3  overflow-hidden cursor-pointer flex flex-col justify-center items-center    w-[175px]   shadow-lg hover:shadow-yellow-500  md:h-[250px] relative ">
            <span className="uppercase font-semibold absolute right-0 bottom-0 text-2xl flex justify-center items-center px-2 py-4  bg-yellow-400 rounded-l-full">
              GORENG
            </span>
            <div className="   w-56 mb-20">
              <img src={mee} />
            </div>
          </div>
        </section>
        {/* Menu */}
        <section className="mt-10 flex md:flex-row flex-col justify-center items-center ">
          <div className="flex-1 flex-col  ">
            <h3 className="tracking-widest py-6 font-extrabold text-5xl text-yellow-900">
              MENU
            </h3>
            <div className="px-2 py-6 flex ">
              <div className="flex  flex-col ">
                <div className="mb-10 uppercase underline tracking-wider font-semibold text-yellow-900 text-xl ">
                  Goreng-Rojak-Murtabak-Prata
                </div>
                <div className="flex flex-col justify-center items-center md:items-end gap-2 font-bold text-yellow-950 ">
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Mee Goreng
                  </span>
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Mee Kua
                  </span>
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Bee Hoon Goreng
                  </span>
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Nasi Goreng
                  </span>
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Tulang
                  </span>
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Murtabak
                  </span>
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Mutton/Chicken Chop
                  </span>
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Mutton/Chicken Steak
                  </span>
                  <span className="cursor-pointer hover:scale-105  hover:underline transition-all">
                    Prata
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col h-[500px] overflow-hidden flex justify-center items-center relative">
            <h2 className="text-5xl font-bold text-red-600 uppercase text-center">
              You will never feel alone
            </h2>
            <p className="tracking-widest font-bold text-xl mt-10 text-yellow-800">
              Taste and never forget
            </p>
            <img
              src={owner}
              className="absolute -right-5 top-10 h-48 z-0 block md:hidden"
            />
          </div>
        </section>
        {/* footer */}
      </main>
      <footer className="w-full h-10 bg-yellow-900 flex justify-center items-center gap-2 font-bold mt-10">
        <p className="text-3xl text-yellow-300">&#169;</p>{" "}
        <p className=" text-yellow-200">H&W FAMILY</p>
      </footer>
    </div>
  );
}

export default App;
