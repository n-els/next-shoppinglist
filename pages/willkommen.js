import React from 'react';
import Head from 'next/head';

const willkommen = () => {
  return (
    <div>
      <Head>
        <title>Willkommen - EinkaufsGenie</title>
      </Head>
      <h1 className="text-xl font-bold text-primary">Herzlich Willkommen</h1>
      <p className="mt-4">
        Du hast dich erfolgreich registriert, dein Benutzerkonto ist jetzt aktiv
        und eine leere Einkaufsliste wurde für dich angelegt!
      </p>
    </div>
  );
};

export default willkommen;
