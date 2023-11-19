import Image from 'next/image';

function AboutMe({ clickAmount, increment }) {
  return (
    <div>
      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">IBCLC</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-tablet"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Online consultation
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-target"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Personalized
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-lock"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Privacy
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-8 u-margin-top-8">
          <h2 className="heading-secondary">
            Specialized in breast feeding + more than 5 years in consultation.
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Learn how to breast feed your baby
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua{' '}
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Improve latch and reduce nipple pain
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <span>Number of clicks in global state {clickAmount}</span>
            <a onClick={increment} href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            {/*BEM naming convention: Block Element Modifier */}
            <div className="composition">
              <Image
                src="/nat-1-large.jpg"
                alt="Photo 1"
                className="composition__photo composition__photo--p1"
                width={200}
                height={100}
              />
              <Image
                src="/nat-2-large.jpg"
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
                width={200}
                height={100}
              />
              <Image
                src="/nat-3-large.jpg"
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
