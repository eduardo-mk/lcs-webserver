import Image from 'next/image';

function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        {/* <video className="bg-video__content" autoPlay={true} muted loop>
          <source src="./video.mp4" type="video/mp4" />
          <source src="./video.webm" type="video/webm" />
          Your browser is not supported! */}
        {/* </video> */}
      </div>
      <div className="u-center-text  u-margin-bottom-big">
        <h2 className="heading-secondary">Special cases and achievements.</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <Image
              src="/nat-8.jpg"
              alt="Person on a tour"
              height={100}
              width={150}
              className="story__img"
            />
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-big">
              I couldn&apost feed my baby because ABC
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <Image
              src="/nat-9.jpg"
              alt="Person on a tour"
              className="story__img"
              height={100}
              width={150}
            />
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-big">
              I couldn&apost feed my baby because ABC
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <Image
              src="/nat-10.jpg"
              alt="Person on a tour"
              className="story__img"
              height={100}
              width={150}
            />
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-big">
              I couldn&apost feed my baby because ABC
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
