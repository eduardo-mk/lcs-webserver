function detailGenerator(metadata) {
  if (!metadata.more_details) return null;
  return metadata.more_details.split(',').map((detail, i) => {
    return <li key={i}>- {detail}</li>;
  });
}

function Plan({ info, clickHandler, selectedPlan }) {
  const { metadata, name, default_price, desc, currency, id } = info;

  const selectedPlanClass = selectedPlan === id ? 'small-card__selected' : '';
  return (
    <div className={`small-card ${selectedPlanClass}`}>
      <div className="small-card__container small-card__container--top">
        <h2 className="small-card__heading">
          <span className="small-card__heading-span">{name}</span>
        </h2>
        <div className="small-card__cta">
          <div className="small-card__price-box">
            <span className="small-card__price-value">${default_price}</span>{' '}
            <span className="small-card__currency">{currency}</span>
          </div>
        </div>
      </div>
      <div className="small-card__description">{desc}</div>
      <div className="small-card__container">
        <div className="small-card__details">
          <h4>¿Qué incluye?</h4>
          <ul className="small-card__list">{detailGenerator(metadata)}</ul>
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

export default Plan;
