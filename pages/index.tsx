import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { mainPage } from '../content';
import { HomepageHeroCards } from '../components/hero-card';
import homepageDataList from '../content/homepage';

export default function Home({ clickAmount, increment }) {
  return (
    <div className="homepage">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Veronica Nutrición y Lactancia</title>
      </Head>
      {/* <MainNavigation /> */}
      <header className="header">
        <div className="header__logo-box">
          <Image
            className="header__image header__iso"
            src="/logo/veronica-isotipo-v4.svg"
            alt="logo"
            width={200}
            height={100}
          />
          <Image
            className="header__image header__iso-text"
            src="/logo/veronica-letras-iso-crop.svg"
            alt="logo"
            width={200}
            height={100}
          />
        </div>
        {/* <div className="header__text-box"> */}
        {/* <h1 className="heading-primary">
            <span className="heading-primary--main">
              {mainPage['heading-primary-main']}
            </span>
            <span className="heading-primary--sub">
              {mainPage['heading-primary-sub']}
            </span>
          </h1> */}
        {/* </div> */}
        <div className="header__cta-button">
          <Link href="/booking/plans" className="btn btn--white btn--animated">
            {' '}
            {mainPage['online-booking-cta']}
          </Link>
        </div>
      </header>
      <HomepageHeroCards list={homepageDataList} />
    </div>
  );
}
