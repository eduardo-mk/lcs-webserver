import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logoWhite from '../public/logo-white.png';

import Head from 'next/head';
import MainNavigation from '../components/main-navigation/index.js';
import { useEffect } from 'react';

export default function Home({ clickAmount, increment }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Veronica Lactation Consultant</title>
      </Head>
      {/* <MainNavigation /> */}
      <header className="header">
        <div className="header__logo-box">
          <Image src="/logo/veronica-isotipo.svg" layout="fill" alt="logo" />

          {/* <img src="logo-white.png" className='header__logo' alt="Logo"></img> */}
          {/* <Image src={logoWhite} alt="Logo" className="logo" width={60} height={35} /> */}
        </div>
        <div className="header-logo"></div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Veronica</span>
            <span className="heading-primary--sub">Lactation Consultant</span>
          </h1>
          <Link
            href="/test-booking/plans"
            className="btn btn--white btn--animated"
          >
            {' '}
            Online appointment
          </Link>
          {/* <a onClick={increment} href="#" className="btn btn--white btn--animated">Online appointment</a> */}
        </div>
      </header>
      <main>
        <section className="section-tours">
          <div className="u-center-text u-margin-bottom-8 u-margin-top-8">
            <h2 className="heading-secondary">Most popular plans</h2>
          </div>
          <div className="card__container">
            <div className="card">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  Intuitive nutrition
                </span>
              </h4>
              <div className="card__details">
                <ul className="">
                  <li>2 sessions per month</li>
                  <li>Nutrition plan</li>
                  <li>Grocery list</li>
                  <li>Online Support</li>
                  <li>E-books</li>
                </ul>
              </div>

              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$170</p>
                </div>
                <a href="#" className="btn btn--white">
                  Book now
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  Pregnancy Max
                </span>
              </h4>
              <div className="card__details">
                <ul className="">
                  <li>2 sessions per month</li>
                  <li>Nutrition plan</li>
                  <li>Grocery list</li>
                  <li>Online Support</li>
                  <li>E-books</li>
                </ul>
              </div>
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$170</p>
                </div>
                <a href="#" className="btn btn--white">
                  Book now
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    Breastfeeding special
                  </span>
                </h4>
                <div className="card__details">
                  <ul className="">
                    <li>1 session</li>
                    <li>Nutrition plan</li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back  card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$100-$200</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-8">
            <Link href="/booking" className="btn btn--green">
              Discover all plans
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
