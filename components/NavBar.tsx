'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } bg-[#1B222C] text-white md:py-[20px] md:px-[53px] px-[25px] py-[10px] flex justify-between md:items-center`}
    >
      <div>
        <a href="/">
        <img className="cursor-pointer h-[30px] md:h-[40px]"
          src="/logo.svg"
          alt="Logo"
        />
        </a>

      </div>
      <ul className="hidden md:flex md:gap-[52px] text-[16px] md:text-[20px]">
      <Link href="/" className="hover:text-[#FB8B01]">Home</Link>
      <Link href="/notes" className="hover:text-[#FB8B01]">Notes</Link>
      <Link href="/quiz" className="hover:text-[#FB8B01]">Quiz</Link>
      <Link href="/exercises" className="hover:text-[#FB8B01]">Exercises</Link>
      <Link href="/projects" className="hover:text-[#FB8B01]">Projects</Link>
      </ul>
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="text-[20px] z-50 relative text-white">
          {menuOpen ? '✕' : '☰'}
        </button>
        <div
          className={`fixed top-0 right-0 h-screen drop-shadow-2xl w-3/4 max-w-[250px] text-white bg-[#1B222C]  shadow-lg transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col gap-4 pt-16 px-4`}
        >
          <Link href="/" className="cursor-pointer border-b hover:text-[#FB8B01] active:text-[#FB7712]">Home</Link>
          <Link href="/notes" className="cursor-pointer border-b hover:text-[#FB8B01] active:text-[#FB7712]">Notes</Link>
          <Link href="/quiz" className="cursor-pointer border-b hover:text-[#FB8B01] active:text-[#FB7712]">Quiz</Link>
          <Link href="/exercises" className="cursor-pointer border-b hover:text-[#FB8B01] active:text-[#FB7712]">Exercises</Link>
          <Link href="/projects" className="cursor-pointer border-b hover:text-[#FB8B01] active:text-[#FB7712]">Projects</Link>
          <Link href="/contact" className="cursor-pointer border-b hover:text-[#FB8B01] active:text-[#FB7712]">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
