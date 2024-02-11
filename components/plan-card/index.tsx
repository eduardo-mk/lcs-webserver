import { MouseEventHandler } from 'react';
import * as GraphQL from '../../graphql/codegen_auto_generated';
import { formatCurrency } from '../../misc';
import Image from 'next/image';
import Link from 'next/link';

export function detailGenerator(details: string[]) {
  if (!Array.isArray(details)) return null;
  return details.map((detail, i) => {
    return <li key={i}>{detail}</li>;
  });
}

function Plan({ info, clickHandler, selectedPlan }: PlanArgs) {
  const { details, name, price, description, currency, id } = info;

  const selectedPlanClass = selectedPlan === id ? 'small-card__selected' : '';
  return (
    <div className={`small-card ${selectedPlanClass}`}>
      <div className="small-card__container small-card__container--top">
        <h2 className="small-card__heading">
          <span className="small-card__heading-span">{name}</span>
        </h2>
        <div className="small-card__service-logo">
          <Image
            src={`/images/consulta_logo_${id}.png`}
            alt="logo"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="small-card__description">{description}</div>

      {/* <div className="small-card__details">
        <h4>¿Qué incluye?</h4>
        <ul className="small-card__list">{detailGenerator(details)}</ul>
      </div> */}

      <div className="small-card__container">
        <div className="small-card__cta">
          <div className="small-card__price-box">
            <span className="small-card__price-value">
              {formatCurrency(price)}
            </span>{' '}
            <span className="small-card__currency">{currency}</span>
          </div>
        </div>
        <div className="small-card__btn">
          <button onClick={clickHandler} data-id={id} data-name-of-plan={name}>
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  );
}

interface PlanArgs {
  info: GraphQL.Service;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
  selectedPlan: string;
}
export default Plan;
