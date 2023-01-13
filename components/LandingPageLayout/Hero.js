import React from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="block md:hidden place-self-center mb-10">
        <Image
          src="/images/hero-screens-cut.png"
          alt="Hero Image"
          width="300"
          height="400"
        />
      </div>
      <div className="hidden md:block xl:content-center xl:ml-auto">
        <Image
          src="/images/hero-screens-cut.png"
          alt="Hero Image"
          width="400"
          height="400"
        />
      </div>
      <div className="text-center md:text-left xl:max-w-lg ">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Die Einkaufsliste für
          <br />
          <span className="text-secondary font-black sm:tracking-wider">
            Schnäppchenjäger
          </span>
        </h2>
        <p className="py-4 px-8 md:px-0 md:text-lg mt-4 tracking-wide mb-4">
          Einfach Produkte mit den jeweiligen Geschäft, welches diese Produkte
          günstig anbieten, deiner eigenen Einkaufsliste hinzufügen und los
          geht's mit dem Schnäppchenjagen in den Supermärkten!
        </p>

        <PrimaryButton link={'/liste'}>zur Einkaufsliste</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
