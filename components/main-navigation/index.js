import Link from 'next/link';
import { useState } from 'react';

function Navigation() {
  const [dropDownOpen, setDropDown] = useState(false);

  function clickNavBar(e) {
    setDropDown(!dropDownOpen);
  }
  return (
    <>
      <div className="navigation" onClick={clickNavBar}>
        <input
          type="checkbox"
          className={`navigation__checkbox ${
            dropDownOpen ? 'navigation__checked' : ''
          }`}
          id="navi-toggle"
        ></input>

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div
          className={`navigation__background ${
            dropDownOpen ? 'navigation__checked' : ''
          }`}
        >
          &nbsp;
        </div>

        <div
          className={`navigation__shopping-cart ${
            dropDownOpen ? 'navigation__checked' : ''
          }`}
        >
          <i className="navigation__shopping-cart--icon feature-box__icon icon-ecommerce-cart-content"></i>
        </div>

        <nav
          className={`navigation__nav ${
            dropDownOpen ? 'navigation__checked' : ''
          }`}
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link href="/" className="navigation__link">
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/booking" className="navigation__link">
                Book now
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="#" className="navigation__link">
                Plans
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/stories" className="navigation__link">
                Stories
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/about" className="navigation__link">
                About me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
