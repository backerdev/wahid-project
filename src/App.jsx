import Cards from "./ui/Cards";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import HeroBanner from "./ui/HeroBanner";
import { FaWhatsapp } from "react-icons/fa6";
function App() {
  return (
    <div className=" flex flex-col    items-center  justify-between  relative">
      <div className="w-screen fixed top-20 z-30   flex justify-end">
        <a
          className="w-20 h-10 rounded-full  flex justify-center items-center  text-3xl text-green-50  shadow-md mt-3 mr-20  bg-green-600 "
          href="https://wa.me/06588062313?text=Do%20you%20still%20have%20Rojak"
        >
          <FaWhatsapp />
        </a>
      </div>

      <svg
        className="absolute"
        viewBox="0 0 1903 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="#fde047"
          d="M 0 25 C 477 25 477 110 954 110 L 954 110 L 954 0 L 0 0 Z"
          stroke-width="0"
        ></path>{" "}
        <path
          fill="#fde047"
          d="M 953 110 C 1428 110 1428 500 1903 500 L 1903 500 L 1903 0 L 953 0 Z"
          stroke-width="0"
        ></path>{" "}
      </svg>
      <Header />
      <HeroBanner />

      <Cards />
      <span className="bg-white font-extrabold shadow-md w-full text-yellow-900  uppercase text-center px-2 py-4 my-2">
        Come visit us, we have more
      </span>
      <div className="flex px-2 py-4 md:flex-row flex-col-reverse justify-center items-center">
        {/* <iframe
          width="500"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&height=419&hl=en&q=4A%20eunos%20crescent%20Singapore+(H&W%20Family%20Indian%20Rojak)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
        ></iframe> */}
        <div className="flex flex-col justify-center  items-center max-w-[600px]">
          <h2 className="font-bold  uppercase text-3xl text-yellow-800">
            About us
          </h2>
          <p className="font-extrabold text-center px-2 py-4 ">
            In Eunos Crescent 4A #01-14 , our Indian Rojak stall dishes out
            wonders, <span className="text-red-600 ">lah!</span> With vibrant
            flavors, we offer the best,{" "}
            <span className="text-red-600 ">sure say</span>. Each bite's a burst
            of tradition and taste, carefully crafted. Our's sure perfection
            one. Come, join us{" "}
            <span className="flex  justify-center text-7xl uppercase underline my-2">
              makan <span className="text-red-600 un text-xs">2</span>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
