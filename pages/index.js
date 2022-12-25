import Head from 'next/head';
import Link from 'next/link';
import HomeLayout from '../components/HomeLayout';
import Layout from '../components/layout';
import PlayIcon from '../components/Icons/PlayIcon';
import GitHubIcon from '../components/Icons/GitHubIcon';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>next-shoppinglist</title>
      </Head>
      <p>
        There are thousands of good shopping list apps out there, but none that
        was tailored to my own needs. Since I like to browse supermarket
        brochures with my partner, I needed a way to create a list that offered
        the possibility to specify products and the store where each product
        should be purchased. The main functionality is to add products, check
        off the purchased products and the filter functions to show only
        products for selected stores.
      </p>

      <div className="my-8 flex">
        <Link
          href="/lists"
          className="btn rounded-md px-2 py-2 bg-green-500 text-white font-bold hover:shadow-md
            hover:bg-green-900 flex items-center"
        >
          <span className="mr-2">
            <PlayIcon />
          </span>
          Get started
        </Link>
        <a
          className="btn rounded-md px-2 py-2 bg-orange-500 text-white font-bold ml-2 hover:shadow-md
          hover:bg-green-900 flex items-center"
          href="http://github.com/n-els/next-shoppinglist"
          target="_blank"
        >
          <span className="mr-2">
            <GitHubIcon />
          </span>
          Source Code
        </a>
      </div>
      <p>
        This little web application was built for practice purposes using the
        JavaScript framework next.JS which is built on top of React and
        TailwindCSS. I have learned a lot about next.JS by programming this
        small shopping list. For example how to use file-based routing,
        server-side rendering, multiple layouts and build an internal API which
        communicates with a MongoDB database.
      </p>
    </>
  );
}

HomePage.getLayout = (pagePath) => {
  return HomeLayout;
};
