import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';

//* use preconnect for font, GA to speed up loading of a page
function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop - наш лучший топ</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
      <meta property="og:locale" content="ru_RU" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
