import { CiLocationOn } from "react-icons/ci";

export default function Header() {
  return (
    <header className="max-w-[1100px] mx-auto  hover:text-yellow-600 cursor-pointer transition-all text-xl font-bold flex justify-between w-full items-center px-2 py-3  md:flex-row flex-col z-20 relative ">
      <div>H&W FAMILY INDIAN ROJAK</div>
      <div className="flex items-center font-light ">
        <CiLocationOn />{" "}
        <h2 className="uppercase">4A eunos crescent #01-14 </h2>
      </div>
    </header>
  );
}
