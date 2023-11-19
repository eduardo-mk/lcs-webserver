import Link from 'next/link';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/router';

function msgGenerator(msgList) {
  if (!Array.isArray(msgList) || msgList.length === 0) return null;
  return (
    <ul className="payment__result--list">
      {msgList.map((msg) => (
        <li key={msg}>
          <p className="payment__result--list-msg">{msg}</p>
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

export default function Success({ msgList }) {
  const svgBox = useRef();
  const svg_sad_face = useRef();
  const txt_pay_confirmation = useRef();
  const txt_failure_msg = useRef();
  const router = useRouter();

  const messages = msgList || defaultValues;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from([svg_sad_face.current], {
        // delay: .3,
        duration: 0.82,
        opacity: 0,
        scale: 0.1,
        ease: 'back',
      });

      gsap.to(svg_sad_face.current, {
        duration: 0.5,
        color: 'red',
        filter: `drop-shadow(2px 2px 1px rgb(0 0 0 / 0.4))`,
      });
    }, svgBox);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="payment__result">
      <h1
        className="payment__result--title payment__result--title-error"
        ref={txt_pay_confirmation}
      >
        Hubo un error
      </h1>
      <div ref={svgBox} className="payment__result--icon">
        <svg
          ref={svg_sad_face}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="fail__svg-sad-face"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
        </svg>
      </div>
      <span ref={txt_failure_msg} className="payment__result--failure-msg">
        Detalles
      </span>
      {msgGenerator(messages)}
      <Link href={'/'} passHref>
        <button className="payment__result--button btn">
          Ir a menu principal
        </button>
      </Link>
    </div>
  );
}
