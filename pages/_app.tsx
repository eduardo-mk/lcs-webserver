// import 'normalize.css/normalize.css';
import '../styles/main.scss';
// import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import NavBar from '../components/main-navigation';
import { useState } from 'react';
import Head from 'next/head';
import { apolloClient } from '../graphql/apollo_client';
import ErrorBoundary from '../components/error-boundary';
import { BookingContextWrapper } from '../reducers/booking/wrapper';
import { Footer } from '../components/footer/index';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [clickAmount, setClickAmount] = useState(0);
  const increment = () =>
    setClickAmount((amount) => {
      return amount + 1;
    });
  return (
    <SessionProvider session={session}>
      <BookingContextWrapper>
        <ErrorBoundary>
          <ApolloProvider client={apolloClient}>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              ></meta>
            </Head>
            <NavBar />
            <Component
              {...pageProps}
              clickAmount={clickAmount}
              increment={increment}
            />
            <Footer />
          </ApolloProvider>
        </ErrorBoundary>
      </BookingContextWrapper>
    </SessionProvider>
  );
}

export default MyApp;
