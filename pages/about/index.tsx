import Image from 'next/image';
import aboutMe from '../../public/about-me.jpg';
import aboutMeContent from '../../content/about-me';
import vero from '../../public/images/vero.svg';
import hola from '../../public/images/hola.svg';
import unisonLogo from '../../public/logo/unison.jpg';
import uesLogo from '../../public/logo/ues.png';
import iblceLogo from '../../public/logo/IBCLC_Logo.png';
import { useScrollToTheTopOfThePage } from '../../misc/useScrollTop';

function AboutMe() {
  useScrollToTheTopOfThePage();
  return (
    <div className="about-me">
      <section className="about-me__image-wrapper">
        <Image
          src={aboutMe}
          alt={'Veronica holding her baby, both smiling'}
          style={{
            width: '100%',
            height: 'auto',
          }}
          sizes="100vw"
        />
      </section>
      <section className="about-me__info">
        <div className="about-me__greeting">
          <Image
            src={hola}
            alt="saludo hola"
            style={{
              width: 'auto',
              height: '15rem',
            }}
            sizes="100vw"
          />
        </div>
        <p className="about-me__text-intro">{aboutMeContent['intro-text']}</p>
        <div className="about-me__name">
          <Image
            src={vero}
            alt="veronica"
            style={{
              width: '40%',
              height: 'auto',
            }}
            sizes="100vw"
          />
        </div>
      </section>
      <section className="about_me__credential">
        {/* <h1 className="about-me__credential-header">Mis credenciales</h1> */}
        <ul className="about-me__credential-list">
          <li>
            <div className="about-me__credential-logo">
              <Image
                src={iblceLogo}
                alt="IBLCE logo"
                style={{
                  width: '40%',
                  height: 'auto',
                }}
                sizes="100vw"
              />
            </div>
            <span className="about-me__credential-title">
              CONSULTORA INTERNACIONAL CERTIFICADA EN LACTANCIA MATERNA
            </span>
          </li>

          <li>
            <div className="about-me__credential-logo">
              <Image
                src={unisonLogo}
                alt="UNISON logo"
                style={{
                  width: '35%',
                  height: 'auto',
                }}
                sizes="100vw"
              />
            </div>
            <span className="about-me__credential-title">
              MAESTRA EN CIENCIAS DE LA SALUD
            </span>
          </li>
          <li>
            <div className="about-me__credential-logo">
              <Image
                src={uesLogo}
                alt="UES logo"
                style={{
                  width: '40%',
                  height: 'auto',
                }}
                sizes="100vw"
              />
            </div>
            <span className="about-me__credential-title">
              LICENCIADA EN NUTRICIÓN HUMANA
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;
