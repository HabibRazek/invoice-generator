import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeSwitch from "../ThemeSwitch";
import React from 'react'
import { MdGTranslate } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-light-theme dark:bg-dark-theme text-[#22577A] dark:text-[#C7F9CC] py-8">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-wrap justify-between items-center">
        {/* Logo and Company Name */}
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <Link href="/" className="text-lg font-semibold text-primary">
            Invoice <span className="bg-[#38a3a5] text-white font-bold px-2 py-1"> Maker</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="w-full md:w-auto flex flex-wrap justify-center space-x-4 mb-6 md:mb-0">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </nav>

        {/* Language Switch and Theme Switch */}
        <div className="w-full md:w-auto flex justify-center items-center space-x-4">
          <MdGTranslate />
          <ThemeSwitch />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center border-t border-[#38a3a5] dark:border-[#57CC99] pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Invoice Maker. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
