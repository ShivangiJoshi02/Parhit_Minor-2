import React from "react";
import Delivery from "../img/donate.png";
import HeroBg from "../img/bgPhoto.jpg";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-300 px-4 py-1 rounded-full">
          <p className="text-base  font-semibold">
            Donation Drive
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="lg:text-[4.5rem]  text-[2.5rem] font-bold  tracking-wide text-headingColor" >There is <span className="text-orange-600 text-[3rem] lg:text-[5rem]" >Power</span> in <span className="text-orange-600 text-[3rem] md:text-[5rem]" >Giving</span>.</p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Welcome to our web-based online system for used goods donation! Our platform is designed to make it easy for donors to give their used items to people in need.Join us in our mission to reduce waste and help those in need with our user-friendly online donation platform!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
           Let's Donate for a Better World. 
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-full lg:h-650"
          alt="hero-bg"
        />

        
      </div>
    </section>
  );
};

export default HomeContainer;