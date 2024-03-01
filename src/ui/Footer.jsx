import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-yellow-800 py-6 w-screen ">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">H&W FAMILY INDIAN ROJAK</p>
          <p className="text-sm"> Eunos Crescent 4A #01-14</p>
        </div>
        <div className="text-center md:text-right ">
          <p className="text-sm">Follow Us:</p>
          <div className="flex items-center justify-center md:justify-end mt-2">
            <a
              href="#"
              className="text-blue-600 h-7 w-7 flex justify-center items-center border-blue-600 border-2  rounded-full  hover:text-blue-50 hover:bg-blue-600 transition-all mx-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-pink-600 h-7 w-7 flex justify-center items-center border-pink-600 border-2  rounded-lg  hover:text-pink-50 hover:bg-pink-600 transition-all mx-2"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
