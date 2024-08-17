import React from 'react';
import Image from 'next/image';

interface EstimateSectionProps {
  title: string;
  description: string;
  additionalText?: string;
  imageSrc: string;
}

const EstimateSection: React.FC<EstimateSectionProps> = ({ title, description, additionalText, imageSrc }) => {
  return (
    <section className="relative py-16 overflow-x-hidden">
      {/* Background Elements */}
      <div aria-hidden="true" className="absolute inset-0 flex justify-center items-center">
        <div className="bg-gradient-to-r from-[#22577A]/40 to-[#38A3A5]/40 blur-3xl w-[30rem] h-[15rem] rotate-[-60deg] dark:from-[#22577A]/40 dark:to-[#38A3A5]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-[#22577A] dark:text-[#C7F9CC] mb-4">
            {title}
          </h2>
          <p className="text-lg text-[#38A3A5] dark:text-[#80ED99]">
            {description}
          </p>
          {additionalText && (
            <p className="mt-4 text-lg text-[#38A3A5] dark:text-[#80ED99]">
              {additionalText}
            </p>
          )}
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
