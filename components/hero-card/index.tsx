export default function HeroCard() {
  return (
    <div className="card">
      <div className="card__picture card__picture--1">&nbsp;</div>
      <h4 className="card__heading">
        <span className="card__heading-span card__heading-span--1">
          Intuitive nutrition
        </span>
      </h4>
      <div className="card__details">
        <ul className="">
          <li>2 sessions per month</li>
          <li>Nutrition plan</li>
          <li>Grocery list</li>
          <li>Online Support</li>
          <li>E-books</li>
        </ul>
      </div>

      <div className="card__cta">
        <div className="card__price-box">
          <p className="card__price-only">Only</p>
          <p className="card__price-value">$170</p>
        </div>
        <a href="#" className="btn btn--white">
          Book now
        </a>
      </div>
    </div>
  );
}
