import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

export const Credentials: React.FC<CredentialsArgs> = ({
  inspirationalDescription,
  href,
  logo_1,
  logo_1_alt,
  logo_2,
  logo_2_alt,
  logo_3,
  logo_3_alt,
  ctaMessage,
}) => {
  return (
    <div className="credential">
      <div className={`credential__picture`}></div>
      <div className="credential__details">
        <div className="credential__inspirational-text">
          <span>{inspirationalDescription}</span>
        </div>
        {/* <section className="credential__badges">
          <Image
            src={logo_1}
            alt={logo_1_alt}
            style={{
              width: 'auto',
              height: '10rem',
            }}
            sizes="100vw"
          />
          <Image
            src={logo_2}
            alt={logo_2_alt}
            style={{
              width: 'auto',
              height: '10rem',
            }}
            sizes="100vw"
          />
          <Image
            src={logo_3}
            alt={logo_3_alt}
            style={{
              width: 'auto',
              height: '10rem',
            }}
            sizes="100vw"
          />
        </section> */}
        <section className="credential__cta-wrapper">
          <div className="credential__cta-button">
            <Link href={href} className="btn btn--blue">
              {ctaMessage}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

interface CredentialsArgs {
  inspirationalDescription: string;
  logo_1: StaticImageData;
  logo_1_alt: string;
  logo_2: StaticImageData;
  logo_2_alt: string;
  logo_3: StaticImageData;
  logo_3_alt: string;
  href: string;
  ctaMessage: string;
}
