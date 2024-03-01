import hero_banner from "../assets/hero_banner.png";
import { Helmet } from "react-helmet";
export default function HeroBanner() {
  return (
    <>
      <Helmet>
        <title>Top Must-Try Indian Rojak </title>
        <meta
          name="description"
          content="Indulge in the delectable flavors of India Rojak, a beloved street food dish that tantalizes the taste buds with its unique blend of savory and tangy flavors. Our guide unveils the secrets behind this iconic Indian delicacy, from its crispy textures to its zesty sauces. Discover the authentic essence of India Rojak and embark on a culinary journey through the vibrant streets of India."
        />
      </Helmet>
      <div className="   flex justify-between items-center relative shadow-md my-2">
        <div className="absolute z-10  -top-28 -left-20 shadow-md bg-yellow-300 w-[350px] rounded-full h-[350px]"></div>
        <div className="absolute z-0  -top-28 -left-20  bg-red-300 shadow-2xl w-[380px] rounded-full h-[380px]"></div>
        <div className="w-screen   flex justify-center  md:flex-row flex-col z-20 shadow-sm">
          <img className="md:h-[450px] md:block hidden   " src={hero_banner} />
          <div className="px-10 py-10 ">
            <h2 className="font-bold text-3xl md:text-5xl flex flex-col items-center justify-center text-center">
              The town's greatest Indian
              <div className="flex flex-col md:flex-row w-[150px] justify-center  md:items-center">
                <span className="text-9xl text-red-600 ">Ro</span>

                <span className="flex justify-between ">
                  <span>j</span>
                  <span>a</span>
                  <span>k</span>{" "}
                </span>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
