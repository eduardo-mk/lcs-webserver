import Link from 'next/link';
import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import BookingFlow from '../../compositions/booking';
import Image from 'next/image';
import usePreventBackNavigation from '../../misc/usePreventBackNavigation';

function msgGenerator(msgList) {
  if (!Array.isArray(msgList) || msgList.length === 0) return null;
  return (
    <ul className="list-disc text-sm mt-2">
      {msgList.map((msg) => (
        <li key={msg}>
          <p className="text-neutral-600">{msg}</p>
        </li>
      ))}
    </ul>
  );
}
const defaultValues = [
  `No se generó ningun recargo a tu tarjeta`,
  `Cita no concretada`,
  `Quizas los datos de la tarjeta eran incorrectos`,
  `Intenta apartar en otro horario de atención`,
];

export default function Fail({ msgList }) {
  const svgBox = useRef();
  const svg_sad_face = useRef();
  const txt_pay_confirmation = useRef();
  const txt_failure_msg = useRef();

  usePreventBackNavigation('/');

  const messages = msgList || defaultValues;

  return (
    <BookingFlow>
      <div className="flex flex-col items-center mx-auto max-w-md px-4 lg:max-w-none">
        <h1 className="mt-20 text-xl font-bold" ref={txt_pay_confirmation}>
          Lo sentimos, hubo un error al efectuar el pago.
        </h1>
        <div ref={svgBox} className="mt-4">
          <Image
            ref={svg_sad_face}
            src="/images/dog-pensative.png"
            alt="perro triste"
            width={330}
            height={330}
            priority={true}
          />
          {/* <svg
            ref={svg_sad_face}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-60 mt-4"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg> */}
        </div>
        <span ref={txt_failure_msg} className="mt-10 text-lg">
          Detalles
        </span>
        {msgGenerator(messages)}
        <Link
          href={'/'}
          passHref
          className="block w-40 mt-20 rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Ir a menu principal
        </Link>
      </div>
    </BookingFlow>
  );
}
