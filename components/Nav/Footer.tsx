import React from 'react';
import Link from 'next/link';
import ThemeSwitch from '../ThemeSwitch';
import { MdGTranslate } from 'react-icons/md';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-light-theme dark:bg-dark-theme text-[#22577A] dark:text-[#C7F9CC] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Company Name */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <Link href="/" className="text-lg font-semibold text-primary">
              {t('logo.companyName')} <span className="bg-[#38a3a5] text-white font-bold px-2 py-1">{t('logo.highlightedText')}</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="w-full md:w-auto flex flex-wrap justify-center space-x-4 mb-6 md:mb-0">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navigationLinks.Home')}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navigationLinks.About')}
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navigationLinks.Services')}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navigationLinks.Contact')}
            </Link>
            <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navigationLinks.PrivacyPolicy')}
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors">
              {t('navigationLinks.TermsOfService')}
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
          <p className="text-sm">&copy; {new Date().getFullYear()} {t('bottomText')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
