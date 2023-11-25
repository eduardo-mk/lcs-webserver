import { Service } from '../../graphql/codegen_auto_generated';
import { detailGenerator } from '../plan-card';

export const ServiceHeroCard: React.FC<Service & { index: number }> = ({
  name,
  metadata,
  default_price,
  index,
}) => {
  return (
    <div className="card">
      <div className={`card__picture card__picture--${index + 1}`}>&nbsp;</div>
      <h4 className="card__heading">
        <span className={`card__heading-span card__heading-span--${index + 1}`}>
          {name}
        </span>
      </h4>
      <div className="card__details">
        <ul className="">{detailGenerator(metadata)} </ul>
      </div>
      <div className="card__cta">
        <div className="card__price-box">
          <p className="card__price-only">Only</p>
          <p className="card__price-value">{default_price}</p>
        </div>
        {/* <a href={link} className="btn btn--white">
          Book now
        </a> */}
      </div>
    </div>
  );
};

export const ServiceHeroCards: React.FC<{ list: Service[] }> = ({ list }) => {
  return (
    <div className="card__container">
      {list.map((element, index) => (
        <ServiceHeroCard key={element.name} {...element} index={index} />
      ))}
    </div>
  );
};
