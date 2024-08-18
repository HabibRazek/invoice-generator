"use client";

import { useState, useEffect } from "react";
import ThemeSwitch from "../ThemeSwitch";
import { useTranslations } from 'next-intl';
import { Link } from "@/navigation";
import LocaleSwitcher from "../LocaleSwitcher";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("bg-transparent");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setNavBackground(!menuOpen ? "bg-white shadow-md dark:bg-[#001524] dark:shadow-md" : "bg-transparent");

  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground("bg-slate-100 shadow-md dark:bg-[#001524] dark:shadow-md");
    } else {
      setNavBackground("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = useTranslations('Navbar');

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${navBackground}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 w-full overflow-x-hidden">
        <Link href="/" className="text-lg font-semibold text-primary">
          {t('companyName')} <span className="bg-[#38a3a5] text-white font-bold px-2 py-1">{t('highlightedText')}</span>
        </Link>

        <div className="flex items-center md:hidden">
          <ThemeSwitch />
          <LocaleSwitcher />
          <button
            onClick={toggleMenu}
            className="relative h-5 w-5 flex flex-col justify-between items-center ml-4"
          >
            <span
              className={`block h-0.5 w-5 bg-primary transform transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-5 bg-primary transform transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-5 bg-primary transform transition-transform duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <nav className="space-x-4">
            <Link href="/home" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navLinks.Home')}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navLinks.About')}
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navLinks.Services')}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navLinks.Contact')}
            </Link>
          </nav>
          <ThemeSwitch />
          <LocaleSwitcher />
        </div>
      </div>

      <nav
        className={`md:hidden bg-background border-t overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 py-2">
          <Link href="/" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
            {t('navLinks.Home')}
          </Link>
          <Link href="/about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
            {t('navLinks.About')}
          </Link>
          <Link href="/services" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
            {t('navLinks.Services')}
          </Link>
          <Link href="/contact" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
            {t('navLinks.Contact')}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
