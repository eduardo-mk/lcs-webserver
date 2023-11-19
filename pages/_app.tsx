import 'normalize.css/normalize.css';
import '../styles/main.scss';
import { ApolloProvider } from '@apollo/client';

import NavBar from '../components/main-navigation';
import { useState } from 'react';
import Head from 'next/head';
import { apolloClient } from '../graphql/apollo_client';
import ErrorBoundary from '../components/error-boundary';
import { BookingContextWrapper } from '../reducers/booking/wrapper';

function MyApp({ Component, pageProps }) {
  const [clickAmount, setClickAmount] = useState(0);
  const increment = () =>
    setClickAmount((amount) => {
      return amount + 1;
    });

  return (
    <BookingContextWrapper>
      <ErrorBoundary>
        <ApolloProvider client={apolloClient}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            ></meta>
          </Head>
          <NavBar></NavBar>
          {/* <LayouNavFooter dropDownStateRef={dropDownStateRef}> */}
          <Component
            {...pageProps}
            clickAmount={clickAmount}
            increment={increment}
          />
          {/* </LayouNavFooter> */}
        </ApolloProvider>
      </ErrorBoundary>
    </BookingContextWrapper>
  );
}

export default MyApp;
