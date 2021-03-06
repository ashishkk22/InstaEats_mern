import React from "react";
import homeBanner from "../../images/feepik.png";
const Banner = () => {
  return (
    <>
      <section className="bg-secondaryWeb">
        <div className="container mx-auto flex flex-col sm:flex-col md:flex-row">
          <div className="flex-1 h-1/2">
            <img src={homeBanner} alt="banner" />
          </div>
          <div className="flex flex-col items-center	flex-1 justify-center  ">
            <h1 className="text-xl md:text-xl justify-center py-1">
              Are You Hungry ?
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold py-1 text-center">
              Don't Wait !
            </h1>
            <h2 className=" py-1 text-zinc-400">
              A Moments of Delivered on Time
            </h2>
            <button className="bg-primaryWeb px-2 rounded-full hover:bg-orange-500  delay-75 py-2 mt-2 mb-10 md:mb-0">
              <h5 className="text-base px-2 text-white font-bold">Order Now</h5>
            </button>
          </div>
        </div>
      </section>
      <h1 className="flex justify-center text-3xl font-bold m-3 mt-6">
        All Items
      </h1>
    </>
  );
};

export default Banner;
