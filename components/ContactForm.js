"use client";

import React, { useEffect, useRef } from "react";

export default function Contact() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.innerText =
        "Map placeholder (initialize Google Maps here with your API key)";
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Contact form submitted", data);
    alert("Thanks! Form data logged to console (implement POST to backend)");
    e.currentTarget.reset();
  }

  return (
    <section
      id="contact-section"
      className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-gray-100 min-h-[100vh] flex flex-col justify-center items-center"
    >
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-center text-red-600 font-extralight">
        Contact Us
      </h2>
      {/* Main container */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl py-4 sm:py-6 md:py-8 gap-6 sm:gap-8">
        {/* Map */}
        {/* <div id="contact-map" ref={mapRef} className="w-[40vw] h-[25vh] border border-gray-300 rounded-md overflow-hidden self-center text-center text-sm flex items-center justify-center" ></div> */}
        {/* Contact Form */}
        <div className="flex flex-col w-full lg:w-1/2 items-center">
          <form
            onSubmit={handleSubmit}
            className="text-gray-800 w-full max-w-md sm:max-w-lg text-sm sm:text-base"
          >
            <p className="italic text-gray-500 mb-3 sm:mb-4 text-xs sm:text-sm">
              Fields marked with an <span className="text-red-600">*</span> are
              required.
            </p>
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row justify-between mb-3 sm:mb-4 gap-2 sm:gap-3">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm sm:text-base">
                  Your Name:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 sm:p-3 text-sm sm:text-base mt-1 border border-gray-300 rounded-sm bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="company" className="block text-sm sm:text-base">
                  Company:
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full p-2 sm:p-3 text-sm sm:text-base mt-1 border border-gray-300 rounded-sm bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row justify-between mb-3 sm:mb-4 gap-2 sm:gap-3">
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm sm:text-base">
                  Your Email:<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 sm:p-3 text-sm sm:text-base mt-1 border border-gray-300 rounded-sm bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="phone" className="block text-sm sm:text-base">
                  Your Phone Number:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="w-full p-2 sm:p-3 text-sm sm:text-base mt-1 border border-gray-300 rounded-sm bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            {/* Message */}
            <div className="mb-3 sm:mb-4">
              <label htmlFor="message" className="block text-sm sm:text-base">
                Message:<span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-2 sm:p-3 text-sm sm:text-base mt-1 border border-gray-300 rounded-sm h-24 sm:h-28 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
              ></textarea>
            </div>
            {/* Button */}
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white bg-red-600 rounded-sm hover:bg-red-700 transition-colors duration-200 self-start mt-1 w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Enquiries */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 text-gray-800 w-full max-w-sm sm:max-w-md text-sm sm:text-base items-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-light">
              General Enquiries
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light">
              0333 880 2993{" "}
              <span className="text-red-600 mt-1 block text-lg sm:text-xl md:text-2xl">
                info@wpfire.co.uk
              </span>
            </p>
            <p className="leading-relaxed sm:leading-loose text-base sm:text-lg md:text-xl font-light">
              8 The Lindens, <br /> Stock, <br /> Ingatestone, <br /> CM4 9NH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
