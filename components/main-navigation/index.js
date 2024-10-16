import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navigationItems } from '../../content';

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

function Navigation() {
  const [dropDownOpen, setDropDown] = useState(false);
  const [showNavLinksOnTop, setShowNavLinksOnTop] = useState(undefined);

  function checkViewportSize(event) {
    const { innerWidth: width } = window;
    console.log(width);
    if (width > 1200) {
      setShowNavLinksOnTop(true);
      // setDropDown(false);
    } else {
      setShowNavLinksOnTop(false);
      setDropDown(false);
    }
  }

  const debounceFn = debounce(checkViewportSize, 30);

  useEffect(() => {
    window.addEventListener('resize', debounceFn);
    return () => {
      window.removeEventListener('resize', debounceFn);
    };
  }, [debounceFn]);

  useEffect(() => {
    checkViewportSize();
  }, []);

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setDropDown(!dropDownOpen);
    }
  }

  function clickNavBar(e) {
    e.preventDefault();
    if (!showNavLinksOnTop) setDropDown(!dropDownOpen);
  }

  const hideNavigationBarForMediumAndLargeScreens =
    showNavLinksOnTop === true || showNavLinksOnTop === undefined
      ? ' hide-navigation-small'
      : '';
  const openDropDownMenu = dropDownOpen ? ' navigation__checked' : '';

  return (
    <>
      <div className="navigation" onClick={clickNavBar}>
        <div
          className={`navigation__small${openDropDownMenu}${hideNavigationBarForMediumAndLargeScreens}`}
        >
          <div className={`navigation__button ${openDropDownMenu}`}>
            <span
              tabIndex={0}
              onKeyDown={handleKeyPress}
              className="navigation__icon"
            >
              &nbsp;
            </span>
          </div>

          <div className={`navigation__background ${openDropDownMenu}`}>
            &nbsp;
          </div>
        </div>

        {/* <div
          className={`navigation__shopping-cart ${dropDownOpen ? 'navigation__checked' : ''
            }`}
        >
          <i className="navigation__shopping-cart--icon feature-box__icon icon-ecommerce-cart-content"></i>
          <i className="navigation__shopping-cart--icon feature-box__icon icon-ecommerce-cart-check"></i>
        </div> */}

        <nav
          className={`navigation__nav ${openDropDownMenu}${hideNavigationBarForMediumAndLargeScreens}`}
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                href={navigationItems.home.href}
                className="navigation__link"
              >
                {navigationItems.home.label}
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                href={navigationItems.onlineAppointments.href}
                className="navigation__link"
              >
                {navigationItems.onlineAppointments.label}
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                href={navigationItems.services.href}
                className="navigation__link"
              >
                {navigationItems.services.label}
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                href={navigationItems.about.href}
                className="navigation__link text-3xl"
              >
                {navigationItems.about.label}
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                href={navigationItems.login.href}
                className="navigation__link"
              >
                {navigationItems.login.label}
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className={`navigation__nav-not-small ${showNavLinksOnTop ? 'show-nav-list' : 'hide-nav-list'}`}
        >
          <ul className="navigation__nav-not-small__list">
            <li className="navigation__item">
              <Link
                href={navigationItems.home.href}
                className="navigation__nav-not-small__item"
              >
                {navigationItems.home.label}
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                href={navigationItems.onlineAppointments.href}
                className="navigation__nav-not-small__item"
              >
                {navigationItems.onlineAppointments.label}
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                href={navigationItems.services.href}
                className="navigation__nav-not-small__item"
              >
                {navigationItems.services.label}
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                href={navigationItems.about.href}
                className="navigation__nav-not-small__item text-3xl"
              >
                {navigationItems.about.label}
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                href={navigationItems.login.href}
                className="navigation__nav-not-small__item"
              >
                {navigationItems.login.label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
