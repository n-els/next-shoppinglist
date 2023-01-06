import Layout from '../components/layout';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  const LayoutComponent = Component.getLayout
    ? Component.getLayout(pageProps.path)
    : Layout;

  const bgColor = Component.getLayout ? 'bg-gray-200' : 'bg-slate-200';

  return (
    <div className={`${bgColor} min-h-screen`}>
      <SessionProvider session={pageProps.session}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
