"use client";

import React from "react";
import { Element } from "react-scroll";

const HeroSlider = () => {
  return (
    <Element name="home">
      <section className="section-1 relative">
        <div className="slideshow-container relative mx-auto max-h-[100vh] sm:max-h-[90vh]">
          <div className="mySlides animate-fade">
            <div
              className="landing-image bg-cover h-[100vh] sm:h-[93vh] bg-[position:center_40%] flex flex-col justify-center items-start text-black text-left w-screen"
              style={{
                backgroundImage: `url("/images/fire-alarm-landing-1.jpg")`,
              }}
            ></div>
          </div>
        </div>

        {/* Text Container with Max Width */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[70rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col items-start transform -translate-y-8 sm:-translate-y-12 ml-2 sm:ml-4 lg:ml-8">
              <h1 className="primary-title font-roboto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-2 sm:mb-3 inline-block bg-[rgba(25,25,25,0.5)] p-3 sm:p-4 lg:p-6 rounded-sm sm:rounded-md">
                Your Fire Alarm Installation Solutions
              </h1>

              <h2 className="get-quote font-roboto text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-[#e53935] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-sm sm:rounded-md inline-block cursor-pointer no-underline transition-colors duration-300 mt-2 sm:mt-3 hover:bg-[#c62828]">
                Get a Quote Now
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default HeroSlider;
