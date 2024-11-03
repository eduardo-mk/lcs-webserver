import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { mainPage } from '../content';
import { homepageDataList, credentialsData } from '../content/homepage';
import { Credentials } from '../components/credentials';
import { useEffect } from 'react';
import {
  useDispatchContext,
  useStateContext,
} from '../reducers/booking/context';
import { ServiceCards } from '../components/cards/plan-card';
import HeroSection from '../compositions/home-page-hero';
import HeroCards from '../components/hero-card-tw';
import Incentives from '../components/incentives';

export default function Home({ clickAmount, increment }) {
  // const dispatch = useDispatchContext();
  // const { userDataIsValid, planSelectionIsValid, dayAndTimeIsValid, confirmData } = useStateContext()
  // useEffect(() => {
  //   if(!(userDataIsValid && planSelectionIsValid && dayAndTimeIsValid && confirmData))
  //   dispatch({
  //     type: 'reset',
  //   });
  // }, [dispatch]);

  return (
    <div className="homepage">
      <Head>
        {/* <script src="https://accounts.google.com/gsi/client" async></script> */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Veronica Nutrición y Lactancia</title>
      </Head>
      <HeroSection />
      <Incentives />
      <HeroCards />
    </div>
  );
}
