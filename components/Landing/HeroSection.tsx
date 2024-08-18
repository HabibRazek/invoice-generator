import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';

const HeroSection = () => {

  const t = useTranslations('HeroSection'); // Corrected to directly assign the translation function
  return (
    <div className="relative bg-light-theme dark:bg-dark-theme overflow-hidden h-[700px]">
    <div aria-hidden="true" className="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
      <div className="bg-gradient-to-r from-[#22577A]/40 to-[#38A3A5]/40 blur-3xl w-[30rem] h-[50rem] rotate-[-60deg] transform -translate-x-[15rem] dark:from-[#22577A]/40 dark:to-[#38A3A5]/40"></div>
      <div className="bg-gradient-to-tl from-[#57CC99]/40 via-[#80ED99]/40 to-[#C7F9CC]/40 blur-3xl w-[100rem] h-[60rem] rounded-full origin-top-left -rotate-12 -translate-x-[20rem] dark:from-[#57CC99]/60 dark:via-[#80ED99]/60 dark:to-[#C7F9CC]/60"></div>
    </div>

    <div className="relative mt-10 z-10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl text-center mx-auto">
          <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-[#22577A] to-[#38A3A5] text-transparent dark:from-[#57CC99] dark:to-[#80ED99]">
            {t('subtitle')}
          </p>

          <div className="mt-5 max-w-3xl">
            <h1 className="block font-semibold text-[#22577A] text-4xl md:text-5xl lg:text-6xl dark:text-[#C7F9CC]">
              {t('title')}
            </h1>
          </div>

          <div className="mt-5 max-w-4xl">
            <p className="text-lg text-[#38A3A5] dark:text-[#80ED99]">
              {t('description')}
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href='#' className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#22577A] shadow-lg hover:bg-[#38A3A5] dark:bg-[#57CC99] dark:hover:bg-[#80ED99] transition-colors">
              {t('getStartedButton')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
