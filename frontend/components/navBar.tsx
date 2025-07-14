'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full ">
      <div className="flex items-center justify-between pt-6 px-6 xl:pt-[24px] xl:px-[118px]">
        <div>
          <Image src="/logo.png" alt="logo" width={162} height={48} />
        </div>
        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Awareness</Link>
          <Link href="/">Notice</Link>
        </div>
        {/* Desktop Button */}
        <Link href="/scan" className="hidden xl:block bg-[#3B9EA3] py-2 px-4 text-white font-bold text-lg rounded-lg cursor-pointer">
          Try the Skin Cancer Checker
        </Link>
        {/* Burger Icon */}
        <button
          className="xl:hidden flex flex-col dark:text-white justify-center items-center w-10 h-10 cursor-pointer "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-1  bg-[#3B9EA3] rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-7 h-1 bg-[#3B9EA3]  rounded my-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-1 bg-[#3B9EA3]  rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden dark:bg-black flex flex-col items-start bg-white shadow-md px-6 py-4 gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>Awareness</Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>Notice</Link>
          <Link
            className="bg-[#3B9EA3] text-center py-2 px-4 text-white font-bold text-lg rounded-lg mt-2 w-full cursor-pointer"
           href="/scan"
          >
            Try the Skin Cancer Checker
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;