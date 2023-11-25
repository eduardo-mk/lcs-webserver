import Link from 'next/link';
import { ServiceHeroCards } from '../../components/hero-card';
import { mainPage } from '../../content';
import { usePlans } from '../../graphql/hooks';
// import { GetServerSideProps } from "next";

const PopularPlansSection: React.FC = () => {
  const { plans, error, loading } = usePlans(3, 0);

  if (error) {
    console.error(error);
  }

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <section className="section-popular-plans">
      <div className="u-center-text u-margin-bottom-8 u-margin-top-8">
        <h2 className="heading-secondary">{mainPage['heading-secondary']}</h2>
      </div>
      <ServiceHeroCards list={plans} />
      <div className="u-center-text u-margin-top-8">
        <Link href="/booking/plans" className="btn btn--white btn--animated">
          {' '}
          {mainPage['online-booking-cta']}
        </Link>
      </div>
    </section>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { plans, error } = usePlans(3, 0);

//   if (error) {
//     console.error(error);
//   }

//   return {
//     props: {
//       plans,
//     },
//   };
// };

export default PopularPlansSection;
