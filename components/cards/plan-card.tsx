import Link from 'next/link';
import * as GraphQL from '../../graphql/codegen_auto_generated';
import { formatCurrency } from '../../misc';
import { detailGenerator } from '../plan-card';
import Image, { StaticImageData } from 'next/image';
import { mainPage } from '../../content';
import ButtonWhite from '../button-white';
import { useRouter } from 'next/router';

export const ServiceCard: React.FC<ServiceCardArgs> = ({
  id,
  introPhrase,
  inspirationalDescription,
  descriptionList,
  descriptionBriefIntro,
  picturePath,
  pictureAlt,
}) => {
  const router = useRouter();
  return (
    <div className="card">
      <section className={`card__product-head ${id}`}>
        <div className="card__heading">
          <span
            className={`card__heading-span card__heading-span text-3xl font-bold underline`}
          >
            {introPhrase}
          </span>
        </div>
        <div className="card__inspirational-description">
          <span>{inspirationalDescription}</span>
        </div>
        <div className={`card__logo ${id}`}>
          /
          {/* UNcomment this to see the logos <Image src={picturePath} alt={pictureAlt} fill={true} /> */}
        </div>
      </section>
      <div className="card__details">
        <p className="card__details-intro">{descriptionBriefIntro}</p>
        <ul className="">{detailGenerator(descriptionList)} </ul>
      </div>
      <div className="card__cta"></div>
      <div className="card__cta-btn">
        <ButtonWhite onClick={() => router.push('/booking/plans')}>
          {mainPage['online-booking-cta']}
        </ButtonWhite>
        {/* <Link
          href="/booking/plans"
          className="rounded bg-blue-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {' '}
          {mainPage['online-booking-cta']}
        </Link> */}
      </div>
    </div>
  );
};

export const ServiceCards: React.FC<{ list: ServiceCardArgs[] }> = ({
  list,
}) => {
  return (
    <div className="card__container">
      {list.map((element, index) => (
        <ServiceCard key={element.id} {...element} />
      ))}
    </div>
  );
};

interface ServiceCardArgs {
  id: string;
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
