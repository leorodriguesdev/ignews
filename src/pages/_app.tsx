import { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/Header';
import { Provider as NextAuthProvider} from 'next-auth/client';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NextAuthProvider session={pageProps.session}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </NextAuthProvider>
  )
}

export default MyApp
