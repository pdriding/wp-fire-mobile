"use client";

import NextLink from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoCallOutline } from "react-icons/io5";
import { scroller } from "react-scroll";

// Simple throttler
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, Math.max(0, limit - (Date.now() - lastRan)));
    }
  };
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const headerRef = useRef(null);
  const mobileContentRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // scroll spy hook (kept from your original logic)
  const useScrollSpy = (ids, offset = 0) => {
    const [activeId, setActiveId] = useState("home");

    useEffect(() => {
      const handleScroll = throttle(() => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPosition < viewportHeight * 0.3) {
          setActiveId("home");
          return;
        }

        let newActive = null;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const elementHeight = rect.height || el.offsetHeight || 1;
          const visibleHeight = Math.min(
            elementHeight,
            Math.max(0, rect.bottom) - Math.max(0, rect.top)
          );
          const visiblePercentage = (visibleHeight / elementHeight) * 100;
          if (visiblePercentage > 30 && rect.top <= 200) {
            newActive = id;
            break;
          }
        }
        setActiveId(
          newActive || (scrollPosition < viewportHeight * 0.3 ? "home" : "")
        );
      }, 100);

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, [ids, offset]);

    return activeId;
  };

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  const sectionIds = ["home", "about-section", "contact-section"];
  const currentActive = useScrollSpy(sectionIds, headerHeight);

  useEffect(() => {
    if (pathname === "/") {
      setActiveSection(currentActive);
    }
  }, [currentActive, pathname]);

  // mobile menu state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMaxHeight, setMobileMaxHeight] = useState(0);

  useEffect(() => {
    // close mobile nav when path changes
    setMobileOpen(false);
  }, [pathname]);

  // compute dynamic max-height for smooth height animation
  useEffect(() => {
    const compute = () => {
      if (mobileContentRef.current) {
        setMobileMaxHeight(mobileContentRef.current.scrollHeight);
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

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
      setTimeout(() => setActiveSection(sectionId), 550);
      setMobileOpen(false);
    } else {
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", sectionId);
      const headerElement = headerRef.current;
      const targetElement = document.getElementById(sectionId);

      if (headerElement && targetElement) {
        const headerH = headerElement.clientHeight;
        const targetTop = targetElement.getBoundingClientRect().top;
        const scrollPosition = window.pageYOffset + targetTop;

        sessionStorage.setItem(
          "scrollData",
          JSON.stringify({
            headerHeight: headerH,
            targetTop,
            scrollPosition,
          })
        );
      }

      router.push(urlWithHash);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      const scrollTarget = sessionStorage.getItem("scrollTarget");
      const scrollDataString = sessionStorage.getItem("scrollData");

      if (scrollTarget && scrollDataString) {
        setTimeout(() => {
          const element = document.getElementById(scrollTarget);
          if (element) {
            const scrollData = JSON.parse(scrollDataString);
            const offsetTop = element.offsetTop - scrollData.headerHeight;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
          sessionStorage.removeItem("scrollTarget");
          sessionStorage.removeItem("scrollData");
        }, 100);
      }
    }
  }, [pathname]);

  const baseLinkClass =
    "inline-block no-underline font-normal text-sm sm:text-base hover:text-[#cf711f] active:text-[#b24f00] focus:outline-none focus:ring-0";

  const getLinkClass = (section) => {
    if (pathname !== "/") {
      return `${baseLinkClass} text-[#333]`;
    }
    return `${baseLinkClass} ${
      activeSection === section ? "text-[#cf711f]" : "text-[#333]"
    }`;
  };

  // small helper to force a repaint (used after closing in some browsers)
  const forceRepaint = () => {
    void document.body.offsetHeight;
    requestAnimationFrame(() => {});
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-white shadow-sm"
    >
      <div className="w-full max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
        <NextLink
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              router.replace("/");
              setMobileOpen(false);
            }
          }}
          className="block"
        >
          <Image
            src="/images/wp-fire-logo-removebg.png"
            alt="WP Fire logo"
            width={0}
            height={0}
            sizes="(max-width: 640px) 10vw, (max-width: 1024px) 5vw, 5vw"
            className="h-12 sm:h-full w-auto object-contain"
            priority
          />
        </NextLink>

        <nav className="hidden md:flex items-center flex-grow justify-end pr-4 lg:pr-8">
          <ul className="list-none flex items-center gap-4 lg:gap-8 xl:gap-12">
            <li>
              <NextLink
                href="/"
                className={getLinkClass("home")}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    router.replace("/");
                    setTimeout(() => setActiveSection("home"), 550);
                  }
                }}
              >
                Home
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/services"
                className={`${baseLinkClass} ${
                  pathname === "/services" ? "text-[#cf711f]" : "text-[#333]"
                }`}
              >
                Services
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/#about-section"
                className={getLinkClass("about-section")}
                onClick={(e) => handleHashClick(e, "#about-section")}
              >
                About
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/#contact-section"
                className={getLinkClass("contact-section")}
                onClick={(e) => handleHashClick(e, "#contact-section")}
              >
                Contact
              </NextLink>
            </li>
          </ul>
        </nav>

        <div className="hidden sm:flex gap-2 lg:gap-4 items-center justify-center">
          <div className="border-l border-gray-400 h-3 mr-1" />
          <IoCallOutline
            size={24}
            className="text-[#e53935] sm:w-6 sm:h-6 lg:w-8 lg:h-8"
          />
          <div className="flex flex-col">
            <span className="text-xs lg:text-sm font-normal text-[#555]">
              CALL US NOW
            </span>
            <h2 className="text-sm lg:text-lg xl:text-xl font-semibold">
              0333 880 2993
            </h2>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((s) => !s)}
        >
          <span className="w-6 h-0.5 bg-gray-600"></span>
          <span className="w-6 h-0.5 bg-gray-600"></span>
          <span className="w-6 h-0.5 bg-gray-600"></span>
        </button>
      </div>

      {/* Mobile nav — using max-height animation to avoid transform repaint bugs */}
      <nav
        className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-md z-40 transition-all duration-200 overflow-hidden`}
        aria-hidden={!mobileOpen}
        // add a tiny GPU hint to reduce flicker on some browsers
        style={{
          maxHeight: mobileOpen ? `${mobileMaxHeight}px` : "0px",
          paddingTop: mobileOpen ? "1rem" : "0",
          paddingBottom: mobileOpen ? "1rem" : "0",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div
          className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8"
          ref={mobileContentRef}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <NextLink
                href="/"
                className={`${baseLinkClass} text-[#333] block`}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    router.replace("/");
                    setTimeout(() => setActiveSection("home"), 550);
                  }
                  setMobileOpen(false);
                  // small repaint safeguard for flaky browsers
                  forceRepaint();
                }}
              >
                Home
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/services"
                className={`${baseLinkClass} text-[#333] block`}
                onClick={() => setMobileOpen(false)}
              >
                Services
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/#about-section"
                className={`${baseLinkClass} text-[#333] block`}
                onClick={(e) => handleHashClick(e, "#about-section")}
              >
                About
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/#contact-section"
                className={`${baseLinkClass} text-[#333] block`}
                onClick={(e) => handleHashClick(e, "#contact-section")}
              >
                Contact
              </NextLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
