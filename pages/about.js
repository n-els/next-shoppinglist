import Head from 'next/head';
import Link from 'next/link';
// import HomeLayout from '../components/HomeLayout';
import LandingPageLayout from '../components/LandingPageLayout';
import PlayIcon from '../components/Icons/PlayIcon';
import GitHubIcon from '../components/Icons/GitHubIcon';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiReact } from 'react-icons/di';
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiGithub,
} from 'react-icons/si';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>next-shoppinglist</title>
      </Head>
      <section className="px-6 tracking-wide max-w-4xl xl:mx-auto">
        <article>
          <h2 className="text-xl font-semibold mb-4 text-primary ">
            Wieso diese App?
          </h2>
          <p className="mb-4">
            Es gibt Tausende von guten Einkaufslisten-Apps, aber keine die auf
            meine eigenen Bedürfnisse zugeschnitten war. <br />
          </p>
          <p>
            Da ich gerne mit meiner Partnerin durch Supermarktprospekte
            blättere, um eine Menge Geld beim Einkauf zu sparen, brauchte ich
            eine besondere Einkaufsliste, eine Liste, die die die Möglichkeit
            bietet, Produkte und vorallem den{' '}
            <span className="font-medium">
              jeweiligen Supermarkt/Laden anzugeben
            </span>
            , in der jenes rabattiert ist und gekauft werden soll.
          </p>

          <p className="mt-4">
            Mir war sehr wichtig, dass EinkaufsGenie, komplett im Browser, ohne
            extra Download, auf nahezu allen gängigen Geräten funktioniert.
            Dieses Projekt ist zudem als Abschlussprojekt für ein Web
            Development Bootcamp gedacht.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-semibold mt-12 mb-4 text-primary tracking-wide">
            Hauptfunktionalitäten
          </h2>
          <p>
            Die Hauptfunktionalität ist das Hinzufügen von Produkten mit der
            Menge und dem jeweiligen Laden, in welchem gekauft werden soll. Des
            Weiteren kommt noch eine nützliche Filterfunktion dazu, die es dir
            ermöglicht, nur Produkte bestimmter Läden aus deiner Liste
            anzuzeigen, damit du vor allem eine Übersicht beim Einkauf behälst.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-semibold mt-12 mb-4 text-primary tracking-wide">
            Technologien
          </h2>
          <p>
            Einkaufsguru wurde mit dem JavaScript Framework nextJS gebaut,
            welches auf React basiert. Als CSS-Framework wurde TailwindCSS
            verwendet. Die Daten werden in einer MongoDB Datenbank gespeichert.
          </p>
          <p className="mt-6 text-primary flex gap-2 sm:gap-5">
            <AiFillHtml5 size="2rem" />
            <DiCss3 size="2rem" />
            <SiJavascript size="2rem" />
            <SiTailwindcss size="2rem" />
            <DiReact size="2rem" />
            <SiNextdotjs size="2rem" />
            <SiMongodb size="2rem" />
            <SiGithub size="2rem" />
          </p>
        </article>
        <article>
          <h2 className="text-xl font-semibold mt-12 mb-4 text-primary tracking-wide">
            Was habe ich gelernt?
          </h2>
          <p>
            Diese kleine Webanwendung ist vor allem aus Übungszwecken
            entstanden. Ich habe dabei den Einstieg in nextJS geschafft, ein
            JavaScript Framework, welches auf React basiert. Mit diesem Projekt
            konnte ich viele Konzepte und Technologien elernen, wie das
            File-based-Routing, Server-Side-Rendering und das Erstellen einer
            internen API, welche mit einer MongoDB Datenbank kommuniziert. Für
            das CSS-Styling wurde TailwindCSS verwendet, es eignet sich
            hervorragend um Komponenten zu verschönern.
          </p>
        </article>
      </section>
    </>
  );
}

HomePage.getLayout = (pagePath) => {
  return LandingPageLayout;
};
