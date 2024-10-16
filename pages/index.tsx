import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { mainPage } from '../content';
import { homepageDataList, credentialsData } from '../content/homepage';
import { Credentials } from '../components/credentials';
import { useEffect } from 'react';
import { useDispatchContext } from '../reducers/booking/context';
import { ServiceCards } from '../components/cards/plan-card';

export default function Home({ clickAmount, increment }) {
  const dispatch = useDispatchContext();
  useEffect(() => {
    dispatch({
      type: 'reset',
    });
  }, [dispatch]);

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
      {/* <MainNavigation /> */}
      <header className="header">
        <div className="header__logo-box">
          <Image
            className="header__image header__iso"
            src="/logo/veronica-isotipo-v4.svg"
            alt="logo"
            width={200}
            height={100}
            priority={true}
          />
          <Image
            className="header__image header__iso-text"
            src="/logo/veronica-letras-iso-crop.svg"
            alt="logo"
            width={200}
            height={100}
            priority={true}
          />
        </div>
        <div className="header__cta-button">
          <Link
            href="/booking/user-info"
            className="btn btn--white btn--animated"
          >
            {' '}
            {mainPage['online-booking-cta']}
          </Link>
        </div>
      </header>
      <section className="homepage__services">
        <section className="homepage__services-wrapper">
          <h1 className="homepage__services-title">
            Servicios <strong>100% personalizados</strong> para todas las etapas
            del embarazo
          </h1>
          <ServiceCards list={homepageDataList} />
          {/* <HomepageHeroCards list={homepageDataList} /> */}
        </section>
        <section className="homepage__credencials">
          <h1 className="homepage__services-title">¡Bienvenida mamá!</h1>
          <Credentials {...credentialsData} />
        </section>
      </section>
    </div>
  );
}
