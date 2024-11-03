import Image from 'next/image';
import aboutMe from '../../public/about-me.jpg';
import aboutMeContent from '../../content/about-me';
import vero from '../../public/images/vero.svg';
import hola from '../../public/images/hola.svg';
import unisonLogo from '../../public/logo/unison.jpg';
import uesLogo from '../../public/logo/ues.png';
import iblceLogo from '../../public/logo/IBCLC_Logo.png';
// import { useScrollToTheTopOfThePage } from '../../misc/useScrollTop';

export default function AboutMePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <Image
              className="w-auto"
              src={aboutMe}
              alt="logo"
              priority={true}
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(54% 74%, 36% 82%, 51% 29%, 0 57%, 30% 20%, 43% 57%, 0 67%, 57% 100%, 0 26%, 15% 95%)',
                }}
                className="aspect-[1097/845] w-[30rem] sm:w-[30rem] md:w-[50rem] lg:w-[68.5625rem] bg-gradient-to-br from-[#bd5353] to-[#f0a4b1] opacity-15 lg:opacity-30"
              />
            </div>
            {/* <div className="relative  rounded-3xl bg-neutral-100 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <div className="absolute inset-0 bg-neutral-100 mix-blend-multiply" />
              <figure className="relative isolate">
                <svg
                  fill="none"
                  viewBox="0 0 162 128"
                  aria-hidden="true"
                  className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                >
                  <path
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                  />
                  <use x={86} href="#0ef284b8-28c2-426e-9442-8655d393522e" />
                </svg>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/workcation-logo-white.svg"
                  className="h-12 w-auto"
                />
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-neutral-200">
                  <strong className="font-semibold text-white">
                    Judith Rogers,
                  </strong>{' '}
                  CEO at Workcation
                </figcaption>
              </figure>
            </div> */}
          </div>
          <div>
            <div className="text-base leading-7 text-neutral-800 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-neutral-600">
                Mi historia
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
                Hola soy Verónica,
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  mi pasión por la lactancia y la nutrición materno infantil
                  nació en el Hospital Integral de la Mujer en Sonora, donde
                  durante mi servicio social ayudé a cientos de madres. Al
                  percatarme de la necesidad de información actualizada,
                  implementé la capacitación prenatal de lactancia, beneficiando
                  a miles de mujeres.
                </p>
                <p className="mt-8">
                  Como madre, he enfrentado desafíos, como diabetes gestacional,
                  náuseas y dificultades en la lactancia. Mi hijo Nicolás ha
                  tenido reflujo, eczema y alergia a la leche de vaca,
                  experiencias que me fortalecieron y profundizaron mi
                  comprensión de las dificultades de mis pacientes.
                </p>
                <p className="mt-8">
                  Mi misión es acompañarte durante tu embarazo, impulsando
                  cambios desde el respeto y amor propio para prevenir
                  complicaciones y mejorar factores de riesgo. Aseguro la
                  nutrición necesaria para un embarazo saludable y desarrollo
                  óptimo. He aprendido de cada experiencia, desafío y victoria,
                  tanto personalmente como en mi práctica profesional. Cada
                  aprendizaje se transforma en empatía y compromiso, mismos que
                  aplico en cada consulta. Juntas, haremos de tu embarazo y
                  lactancia una experiencia saludable y satisfactoria.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-3 place-items-center gap-8 border-t border-neutral-800/10 pt-10 sm:grid-cols-4">
              <Image
                src={iblceLogo}
                alt="IBLCE logo"
                width={90}
                height={90}
                priority={true}
              />
              <Image
                src={unisonLogo}
                alt="UNISON logo"
                width={80}
                height={80}
                priority={true}
              />
              <Image
                src={uesLogo}
                alt="UES logo"
                width={150}
                height={150}
                priority={true}
              />
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

// function AboutMe() {
//   useScrollToTheTopOfThePage();
//   return (
//     <div className="about-me">
//       <section className="about-me__image-wrapper">
//         <Image
//           src={aboutMe}
//           alt={'Veronica holding her baby, both smiling'}
//           style={{
//             width: '100%',
//             height: 'auto',
//           }}
//           sizes="100vw"
//         />
//       </section>
//       <section className="about-me__info">
//         <div className="about-me__greeting">
//           <Image
//             src={hola}
//             alt="saludo hola"
//             style={{
//               width: 'auto',
//               height: '15rem',
//             }}
//             sizes="100vw"
//           />
//         </div>
//         <p className="about-me__text-intro">{aboutMeContent['intro-text']}</p>
//         <div className="about-me__name">
//           <Image
//             src={vero}
//             alt="veronica"
//             style={{
//               width: '40%',
//               height: 'auto',
//             }}
//             sizes="100vw"
//           />
//         </div>
//       </section>
//       <section className="about_me__credential">
//         {/* <h1 className="about-me__credential-header">Mis credenciales</h1> */}
//         <ul className="about-me__credential-list">
//           <li>
//             <div className="about-me__credential-logo">
//               <Image
//                 src={iblceLogo}
//                 alt="IBLCE logo"
//                 style={{
//                   width: '40%',
//                   height: 'auto',
//                 }}
//                 sizes="100vw"
//               />
//             </div>
//             <span className="about-me__credential-title">
//               CONSULTORA INTERNACIONAL CERTIFICADA EN LACTANCIA MATERNA
//             </span>
//           </li>

//           <li>
//             <div className="about-me__credential-logo">
//               <Image
//                 src={unisonLogo}
//                 alt="UNISON logo"
//                 style={{
//                   width: '35%',
//                   height: 'auto',
//                 }}
//                 sizes="100vw"
//               />
//             </div>
//             <span className="about-me__credential-title">
//               MAESTRA EN CIENCIAS DE LA SALUD
//             </span>
//           </li>
//           <li>
//             <div className="about-me__credential-logo">
//               <Image
//                 src={uesLogo}
//                 alt="UES logo"
//                 style={{
//                   width: '40%',
//                   height: 'auto',
//                 }}
//                 sizes="100vw"
//               />
//             </div>
//             <span className="about-me__credential-title">
//               LICENCIADA EN NUTRICIÓN HUMANA
//             </span>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default AboutMe;
