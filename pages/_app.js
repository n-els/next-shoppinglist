import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Verwenden Sie getLayout, um das Layout für die aktuelle Seite zu ermitteln
  const LayoutComponent = Component.getLayout
    ? Component.getLayout(pageProps.path)
    : Layout;

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
