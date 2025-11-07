import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-16 sm:mt-20  w-relative h-50 sm:h-100 md:h-110 lg:h-[32rem] overflow-hidden rounded-2xl">



  {/* Soft overlay */}
  <div className="absolute inset-0 bg-blue-500/10" />

  
  <div className="relative   flex flex-col justify-center items-center md:items-end text-center md:text-right px-10 sm:px-6 md:pr-20 py-10">
    <div className="max-w-xs sm:max-w-md md:max-w-lg">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-primary  mb-1 sm:mb-6 -mt-8 sm:mt-0">
  Why We Are the Best?
</h1>


      <div className="flex flex-col gap-1  w- sm:gap-3 md:gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-blue-500/40 rounded-md sm:rounded-xl px-1.5 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out scale-[0.95] sm:scale-100"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-4 sm:w-7  md:w-10 shrink-0"
            />
            <div className="text-left">
              <h3 className="text-[11px] sm:text-sm md:text-lg font-semibold leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600/80 text-[9px] sm:text-xs md:text-sm leading-snug">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default BottomBanner; 