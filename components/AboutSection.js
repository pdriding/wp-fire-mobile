"use client"; // Ensure client-side for react-scroll compatibility

import React from "react";
import { Element } from "react-scroll"; // Import Element
import Image from "next/image";

const AboutSection = () => {
  return (
    <Element name="about-section">
      {" "}
      {/* Wrap with Element for proper spy registration */}
      <section
        id="about-section"
        className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 pb-8 sm:pb-12 md:pb-16 lg:pb-20 bg-[#f5f5f5] mb-4 sm:mb-5 w-screen"
      >
        <div className="max-w-[70rem] px-4 sm:px-6 lg:px-8 mx-auto w-full">
          <span className="block text-sm sm:text-base font-medium uppercase tracking-wider text-red-500">
            Trusted Fire Safety Experts Since 2022
          </span>

          <h2 className="font-bold text-black tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
            Your Local Fire Safety Specialists: Professional Installation,
            Maintenance & Compliance Services Across London & South East England
          </h2>

          <div className="about-section-flex flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 mb-4 sm:mb-5">
            <div className="about-section-texts w-full lg:w-1/2">
              <p className="about-section-text-1 leading-relaxed sm:leading-loose pl-0 sm:pl-4 lg:pl-5 mb-4 sm:mb-5 text-base sm:text-lg lg:text-xl font-medium">
                <strong>Why businesses trust WP Fire:</strong> Our
                BAFE-certified technicians deliver fully compliant fire safety
                systems with 24/7 monitoring support. We&apos;ve completed over
                200+ installations across London and the South East, with a 100%
                compliance record and same-day emergency response.
              </p>

              <p className="about-section-text-2 font-light leading-relaxed sm:leading-loose pl-0 sm:pl-4 lg:pl-5 text-base sm:text-lg lg:text-xl">
                Established in 2022, WP Fire has quickly become the preferred
                choice for local councils, property developers, and main
                contractors. Our comprehensive services include fire alarm
                design, installation, maintenance, and emergency lighting
                systems. We&apos;re fully insured, BAFE-registered, and
                committed to protecting your people and property.
              </p>

              <div className="pl-0 sm:pl-4 lg:pl-5 mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                  Our Certifications & Trust Indicators:
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span>
                    BAFE-certified fire safety technicians
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span>
                    Fully insured & liability protected
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span>
                    Local authority approved contractor
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span>
                    24/7 emergency call-out service
                  </li>
                </ul>
              </div>
            </div>

            <div className="install-picture-container w-full lg:w-1/2 flex items-start justify-center lg:justify-start">
              <Image
                src="public/images/fire-alarm-install.jpg"
                alt="Professional fire alarm technician installing fire detection system in commercial building"
                width={400}
                height={400}
                className="w-full max-w-sm lg:max-w-none h-auto rounded-lg shadow-lg"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
