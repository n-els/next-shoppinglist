import React from 'react';
import { BsCodeSlash, BsShield, BsPhone } from 'react-icons/bs';
import { MdOutlineMoneyOffCsred } from 'react-icons/md';

const Benefits = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 mt-8 text-center lg:max-w-3xl mx-auto">
      <div className="rounded-xl px-6 py-4 m-5 shadow-xl flex flex-col items-center ">
        <MdOutlineMoneyOffCsred size="2rem" />
        <h2 className="text-primary text-xl md:text-2xl font-extrabold mb-2">
          Kostenlos
        </h2>
        <p>
          Die Registrierung und Nutzung der Web-Anwendung von EinkaufsGenie ist
          und bleibt auch in Zukunft vollständig kostenlos.
        </p>
      </div>
      <div className="rounded-xl px-6 py-4 m-5 shadow-xl flex flex-col items-center ">
        <BsShield size="2rem" />
        <h2 className="text-primary text-xl md:text-2xl font-extrabold mb-2">
          Datensparsam
        </h2>
        <p>
          Es werden nur absolut nötige Daten erhoben. Diese werden selbstständig
          nicht an Dritte weitergegeben.
        </p>
      </div>
      <div className="rounded-xl px-6 py-4 m-5 shadow-xl flex flex-col items-center ">
        <BsPhone size="2rem" />
        <h2 className="text-primary text-xl md:text-2xl font-extrabold my-2">
          Mobile-friendly
        </h2>
        <p>
          EinkaufsGenie ist für alle gängigen Endgeräte optimiert, setzt seinen
          Fokus aber auf die Nutzung mit dem Smartphone.
        </p>
      </div>
      <div className="rounded-xl px-6 py-4 m-5 shadow-xl flex flex-col items-center ">
        <BsCodeSlash size="2rem" />

        <h2 className="text-primary text-xl md:text-2xl font-extrabold my-2">
          Open Source
        </h2>
        <p>
          Die Entwicklung und der Quellcode von EinkaufsGenie ist Open-Source
          und jederzeit kontrollier-und einsehbar.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
