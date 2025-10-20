"use client";

import Image from "next/image";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import accredLogo from "@/public/images/fire-accreditation.png";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import { scroller } from "react-scroll";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleHomeClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      scroller.scrollTo("home", {
        duration: 500,
        smooth: true,
        offset: -45,
      });
      if (window.location.hash !== "") {
        router.replace("/");
      }
    }
  };

  const handleHashClick = (e, hash) => {
    const sectionId = hash.slice(1);
    const urlWithHash = "/" + hash;

    if (pathname === "/") {
      e.preventDefault();
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -45,
      });
      router.replace(urlWithHash);
    } else {
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", sectionId);
      sessionStorage.setItem("scrollOffset", "-45");
      router.push(urlWithHash);
    }
  };

  return (
    <footer className="bg-[#555] w-full text-white border-t border-gray-200 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row max-w-[70rem] mx-auto gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo Column */}
        <div className="flex-[1.6] flex flex-col justify-center items-center lg:items-start">
          <NextLink href="/" onClick={handleHomeClick} className="mb-4">
            <Image
              src={accredLogo}
              alt="WP Fire Accreditation Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              priority
            />
          </NextLink>
        </div>

        {/* Navigation Column */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
            Company
          </p>
          <ul className="space-y-2 text-gray-400 text-center lg:text-left">
            <li>
              <NextLink
                href="/"
                className="hover:text-red-500 transition-colors text-sm sm:text-base"
                onClick={handleHomeClick}
              >
                Home
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/#about-section"
                className="hover:text-red-500 transition-colors text-sm sm:text-base"
                onClick={(e) => handleHashClick(e, "#about-section")}
              >
                About
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/services"
                className={`hover:text-red-500 transition-colors text-sm sm:text-base ${
                  pathname === "/services" ? "text-red-500" : ""
                }`}
              >
                Services
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/#contact-section"
                className="hover:text-red-500 transition-colors text-sm sm:text-base"
                onClick={(e) => handleHashClick(e, "#contact-section")}
              >
                Contact
              </NextLink>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
            Contact Us
          </p>
          <a
            href="tel:07516 774 472"
            className="text-red-500 hover:text-red-600 mb-2 transition-colors text-sm sm:text-base"
          >
            07516 774 472
          </a>
          <a
            href="mailto:info@wpfire.co.uk"
            className="text-red-500 hover:text-red-600 transition-colors text-sm sm:text-base"
          >
            info@wpfire.co.uk
          </a>

          {/* Social Icons */}
          <ul className="flex gap-3 sm:gap-4 mt-4">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#e53935] hover:text-[#ff6659] transition-colors"
              >
                <IoLogoInstagram
                  size={24}
                  className="sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#e53935] hover:text-[#ff6659] transition-colors"
              >
                <IoLogoFacebook
                  size={24}
                  className="sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#e53935] hover:text-[#ff6659] transition-colors"
              >
                <IoLogoTwitter
                  size={24}
                  className="sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
