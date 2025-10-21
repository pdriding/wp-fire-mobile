"use client";

import NextLink from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    const handleHomeClick = (e) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            router.replace("/");
        }
    };

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <NextLink href="/" onClick={handleHomeClick} className="mb-4">
                        <Image
                            src="/images/fire-accreditation.png"
                            alt="WP Fire accreditation"
                            width={120}
                            height={48}
                            className="h-auto w-auto object-contain"
                            priority={false}
                        />
                    </NextLink>
                    <div>
                        <p className="text-sm text-gray-600">WP Fire — Fire safety services</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#cf711f]">
                        <IoLogoInstagram size={20} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#cf711f]">
                        <IoLogoFacebook size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}