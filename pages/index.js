import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// import HomeLayout from '../components/HomeLayout';
import LandingPageLayout from '../components/LandingPageLayout';
import PlayIcon from '../components/Icons/PlayIcon';
import GitHubIcon from '../components/Icons/GitHubIcon';
import PrimaryButton from '../components/UI/PrimaryButton';
import Hero from '../components/LandingPageLayout/Hero';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>EinkaufsGenie</title>
      </Head>
      <Hero />
    </>
  );
}

HomePage.getLayout = (pagePath) => {
  return LandingPageLayout;
};
