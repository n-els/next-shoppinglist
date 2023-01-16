import Head from 'next/head';
import React from 'react';
import LandingPageLayout from '../components/LandingPageLayout';

const DatenschutzPage = () => {
  return (
    <section className="max-w-4xl md:mx-auto px-6">
      <Head>
        <title>Impressum - EinkaufsGenie</title>
      </Head>
      <h1 className="font-bold text-2xl text-primary mb-4">Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Nader el Sayed
        <br />
        K&ouml;nigstra&szlig;e 14
        <br />
        24568 Kaltenkirchen
      </p>

      <h2>Kontakt</h2>
      <p>E-Mail: nels@tuta.io</p>
    </section>
  );
};

export default DatenschutzPage;

DatenschutzPage.getLayout = (pagePath) => {
  return LandingPageLayout;
};
