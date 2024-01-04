import Link from 'next/link';
import { useState } from 'react';

function Navigation() {
  const [dropDownOpen, setDropDown] = useState(false);

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setDropDown(!dropDownOpen);
    }
  }

  function clickNavBar(e) {
    e.preventDefault();
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
          <span
            tabIndex={0}
            onKeyDown={handleKeyPress}
            className="navigation__icon"
          >
            &nbsp;
          </span>
        </label>

        <div
          className={`navigation__background ${
            dropDownOpen ? 'navigation__checked' : ''
          }`}
        >
          &nbsp;
        </div>

        {/* <div
          className={`navigation__shopping-cart ${dropDownOpen ? 'navigation__checked' : ''
            }`}
        >
          <i className="navigation__shopping-cart--icon feature-box__icon icon-ecommerce-cart-content"></i>
        </div> */}

        <nav
          className={`navigation__nav ${
            dropDownOpen ? 'navigation__checked' : ''
          }`}
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link href="/" className="navigation__link">
                Inicio
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/booking/plans" className="navigation__link">
                Citas en Línea
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/plans" className="navigation__link">
                Planes
              </Link>
            </li>
            {/* <li className="navigation__item">
              <Link href="/stories" className="navigation__link">
                Historias
              </Link>
            </li> */}
            <li className="navigation__item">
              <Link href="/about" className="navigation__link">
                Acerca de mi
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
