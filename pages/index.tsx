import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { mainPage } from '../content';
import PopularPlansSection from '../compositions/popular-plans';

export default function Home({ clickAmount, increment }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Veronica Nutrición y Lactancia</title>
      </Head>
      {/* <MainNavigation /> */}
      <header className="header">
        <Image
          className="header__image"
          src="/logo/veronica-isotipo.svg"
          alt="logo"
          width={200}
          height={200}
        />
        <div className="header-logo"></div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              {mainPage['heading-primary-main']}
            </span>
            <span className="heading-primary--sub">
              {mainPage['heading-primary-sub']}
            </span>
          </h1>
          <Link href="/booking/plans" className="btn btn--white btn--animated">
            {' '}
            {mainPage['online-booking-cta']}
          </Link>
        </div>
      </header>
      <main>
        <PopularPlansSection />
      </main>
    </div>
  );
}
