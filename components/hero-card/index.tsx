import Link from 'next/link';
import * as GraphQL from '../../graphql/codegen_auto_generated';
import { formatCurrency } from '../../misc';
import { detailGenerator } from '../plan-card';
import Image, { StaticImageData } from 'next/image';
import { mainPage } from '../../content';

export const ServiceHeroCard: React.FC<GraphQL.Service & { index: number }> = ({
  id,
  name,
  description,
  details,
  price,
  index,
  currency,
}) => {
  return (
    <div className="card">
      <section className="card__product-head">
        <div className="card__logo">
          <Image
            src={`/images/badge_${id}.svg`}
            // src='/images/svg_prod_LJewF740ywI7AU.svg'
            alt="Stripe Logo"
            // className="payment__plan-stripe-logo"
            width={200}
            height={200}
          />
        </div>
        {/* <div className={`card__picture card__picture--${index + 1}`}>&nbsp;</div> */}
        <h4 className="card__heading">
          <span
            className={`card__heading-span card__heading-span--${index + 1}`}
          >
            {name}
          </span>
        </h4>
      </section>
      <div className="card__description">
        <p className="card__title">¿Qué puedes esperar?</p>
        <p>{description}</p>
      </div>
      <div className="card__details">
        <p className="card__title">Incluye</p>
        <ul className="">{detailGenerator(details)} </ul>
      </div>
      <div className="card__cta">
        <div className="card__price-box">
          <p className="card__title">Precio</p>
          <p className="card__price-value">
            {formatCurrency(price, 1, 1)}{' '}
            <span className="card__price-currency">{currency}</span>
          </p>
        </div>

        {/* <a href={link} className="btn btn--white">
          Book now
        </a> */}
      </div>
      <div className="card__cta-btn">
        <Link href="/booking/plans" className="btn btn--white btn--animated">
          {' '}
          {mainPage['online-booking-cta']}
        </Link>
      </div>
    </div>
  );
};

export const ServiceHeroCards: React.FC<{ list: GraphQL.Service[] }> = ({
  list,
}) => {
  return (
    <div className="card__container">
      {list.map((element, index) => (
        <ServiceHeroCard key={element.id} {...element} index={index} />
      ))}
    </div>
  );
};

export const HomepageHeroCard: React.FC<HerocardArgs & { index: number }> = ({
  index,
  introPhrase,
  inspirationalDescription,
  descriptionList,
  targetIntro,
  target,
  descriptionBriefIntro,
  href,
  picturePath,
  pictureAlt,
  ctaMessage,
}) => {
  return (
    <div className="herocard">
      <div className={`herocard__picture herocard__picture--${index + 1}`}>
        <Image
          src={picturePath}
          alt={pictureAlt}
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority={true}
        />
        <h4 className="herocard__heading">
          <span className={`herocard__heading-span herocard__intro-phrase`}>
            {introPhrase}
          </span>
        </h4>
        <div className="herocard__inspirational-text">
          <span>{inspirationalDescription}</span>
        </div>
      </div>
      <div className="herocard__details">
        <section className="herocard__target-information">
          <div className="herocard__content">
            <span>{descriptionBriefIntro}</span>
            <ul className="herocard__content-list">
              {descriptionList.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="herocard__cta-wrapper">
          <div className="herocard__cta-button">
            <Link href={href} className="btn btn--blue">
              {ctaMessage}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export const HomepageHeroCards: React.FC<{ list: HerocardArgs[] }> = ({
  list,
}) => {
  return (
    <div className="homepage__card homepage__card-container">
      {list?.map((element, index) => (
        <li key={`${element.pictureAlt}${index}`}>
          <HomepageHeroCard {...element} index={index} />
        </li>
      ))}
    </div>
  );
};

interface HerocardArgs {
  introPhrase: string;
  inspirationalDescription: string;
  targetIntro: string;
  target: string;
  descriptionBriefIntro: string;
  descriptionList: string[];
  picturePath: StaticImageData;
  pictureAlt: string;
  href: string;
  ctaMessage: string;
}
