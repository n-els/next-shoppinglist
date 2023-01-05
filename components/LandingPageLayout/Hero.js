import React from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center px-10 md:px-0">
      <div className="block sm:hidden">
        <Image
          src="/images/cutout-hero-1.png"
          alt="Hero Image"
          width="300"
          height="400"
        />
      </div>
      <div className="hidden sm:block flex-1">
        <Image
          src="/images/cutout-hero-1.png"
          alt="Hero Image"
          width="400"
          height="400"
        />
      </div>
      <div className="text-center md:text-left flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-white ">
          Die Einkaufsliste für
          <br />
          <span className="text-secondary font-black sm:tracking-widest">
            Schnäppchenjäger
          </span>
        </h2>
        <p className="text-white md:text-lg mt-4 tracking-wide mb-8">
          Einfach Produkte mit den jeweiligen Geschäft, welches diese Produkte
          günstig anbieten, deiner eigenen Einkaufsliste hinzufügen und los
          geht's mit dem Schnäppchenjagen in den Supermärkten!
        </p>
        <PrimaryButton link={'/lists'}>zur Einkaufsliste</PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
