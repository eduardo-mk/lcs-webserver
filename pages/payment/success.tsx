import Link from 'next/link';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/router';

function msgGenerator(msgList) {
  if (!Array.isArray(msgList) || msgList.length === 0) return null;
  return (
    <ul className="payment__result--list">
      {msgList.map((msg, index) => (
        <li key={index}>
          <p className="payment__result--list-msg">{msg}</p>
        </li>
      ))}
    </ul>
  );
}
const defaultValues = [
  `Revisa tu correo para los siguientes pasos.`,
  `Recuerda llenar tu formulario de salud antes de la cita`,
  `Esta aplicacion usa Stripe para concretar pagos`,
];

export default function Success({ msgList }) {
  const svgBox = useRef();
  const svg_check_mark = useRef();
  const svg_thumbs_up = useRef();
  const txt_pay_confirmation = useRef();
  const txt_thanks = useRef();
  const router = useRouter();

  const messages = msgList || defaultValues;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to([svg_thumbs_up.current, txt_thanks.current], {
        delay: 0.8,
        duration: 0.8,
        opacity: 0,
        scale: 0.8,
        rotateY: `-360`,
        ease: 'back',
      });
      tl.from([svg_check_mark.current], {
        // delay: .2,
        duration: 0.5,
        opacity: 0,
        scale: 0.2,
        ease: 'bounce',
      });
      tl.to(txt_pay_confirmation.current, {
        opacity: 1,
      });

      gsap.to(svg_check_mark.current, {
        duration: 0.6,
        color: 'greenyellow',
      });
    }, svgBox);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="payment__result">
      <h1 className="payment__result--title" ref={txt_pay_confirmation}>
        Pago efectuado
      </h1>
      <div ref={svgBox} className="payment__result--icon">
        <svg
          ref={svg_check_mark}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="success__svg-checkmark bi bi-check-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>

        <svg
          ref={svg_thumbs_up}
          id="svgIcon2"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="success__celebration"
        >
          <defs>
            <linearGradient
              id="gradient-fill3"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#35485c" />
              <stop offset="0.25" stopColor="#007a92" />
              <stop offset="0.5" stopColor="#00af9f" />
              <stop offset="0.75" stopColor="#66de7f" />
              <stop offset="1" stopColor="#f6ff4f" />
            </linearGradient>
          </defs>
          <g fill="url(#gradient-fill3)">
            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
          </g>
        </svg>
      </div>
      <span ref={txt_thanks} className="payment__result--thank">
        ¡Gracias!
      </span>
      <Link href={'/'} passHref>
        <button className="payment__result--button btn">
          Ir a menu principal
        </button>
      </Link>
      {msgGenerator(messages)}
    </div>
  );
}
