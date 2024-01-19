import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

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
          // width={400}
          // height={600}
          // fill={true}
          style={{
            width: '100%',
            height: 'auto',
          }}
          // priority={true}
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
