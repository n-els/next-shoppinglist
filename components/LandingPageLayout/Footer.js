import React from 'react';
import PrimaryButton from '../UI/PrimaryButton';

const Footer = () => {
  return (
    <footer className="bg-primary p-6 m-0 min-h-[220px]">
      <h1 className="text-secondary font-extrabold text-2xl text-center">
        EinkaufsGenie
      </h1>
      <p className="text-white mt-4 text-sm text-center">
        Vereinfachere dein Einkaufserlebnis. <br /> Wir helfen dir dabei den
        Überblick zu behalten!
      </p>
      <div className="flex gap-8 mt-4 text-sm justify-center text-center">
        <ul className="text-white">
          <li>
            <a href="http://">Startseite</a>
          </li>
          <li>
            <a href="http://">Über EinkaufsGenie</a>
          </li>
        </ul>
        <ul className="text-white">
          <li>
            <a href="http://">Anmelden</a>
          </li>
          <li>
            <a href="http://">Kontakt</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
