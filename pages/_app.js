import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const LayoutComponent = Component.getLayout
    ? Component.getLayout(pageProps.path)
    : Layout;

  const bgColor = Component.getLayout ? 'bg-primary' : 'bg-secondary';

  return (
    <div className={`${bgColor} min-h-screen`}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </div>
  );
}

export default MyApp;
