"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import ContentfulImage from "@/app/components/lib/contentful-image";
import Button from "@mui/material/Button";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function HamburguerMenu({ menuOpen }: { menuOpen: boolean }) {
  return (
    <>
      <span
        className={`bg-[#001d66] block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${
                      menuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
      />
      <span
        className={`bg-[#001d66] block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm my-0.5 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
      />
      <span
        className={`bg-[#001d66] block transition-all duration-300 ease-out
                      h-0.5 w-5 rounded-sm ${
                        menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                      }`}
      />
    </>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full h-16 md:h-20 bg-gray-50 top-0 ${
        isScrolled ? "z-50 border-b-2" : ""
      }`}
    >
      <div className="flex justify-between items-center h-full w-full container mx-auto px-5">
        <span onClick={() => setMenuOpen(false)}>
          <Link href="/">
            <ContentfulImage
              src="https://images.ctfassets.net/cnurwx923vw4/6NjpkxInHsigcB9Fyc8esk/9f71b6facea35558d7e72e3a5115659c/logo.png"
              alt="Protopace's logo"
              width={110}
              height={57}
            />
          </Link>
        </span>

        <div className="hidden sm:flex">
          <ul className="flex flex-row items-center gap-x-6">
            <li>
                <Link href="/blog">
                  <Button variant="text" color="primary">
                    <p className="font-regular capitalize">
                      Blog
                    </p>
                  </Button>
                </Link>
            </li>

            <li>
                <Link href="/contact-us">
                  <Button variant="outlined" color="primary">
                    <p className="font-bold capitalize">
                      Contact Us
                    </p>
                    <ArrowForwardOutlinedIcon fontSize="small" className="ml-2"/>
                  </Button>
                </Link>
            </li>
          </ul>
        </div>

        <div onClick={toggleNavbar} className="sm:hidden cursor-pointer pl-24">
          <HamburguerMenu menuOpen={menuOpen} />
        </div>
      </div>

      <div
        className={`fixed w-[100%] h-screen sm:hidden bg-white ease-in duration-300 ${
          menuOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="sm:flex">
          <ul className="flex flex-col">
            <li
              className="flex border-y-2 h-24"
              onClick={() => setMenuOpen(false)}
            >
              <Link
                href="/blog"
                className="flex container mx-auto px-5 items-center w-full h-full text-[hsl(var(--primary))]">
                Blog
              </Link>
            </li>
            <li
              className="flex border-b-2 h-24"
              onClick={() => setMenuOpen(false)}
            >
              <Link
                href="/blog"
                className="flex container mx-auto px-5 items-center w-full h-full text-[hsl(var(--primary))] font-bold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
