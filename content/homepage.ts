//   index,
//   introPhrase,
//   description,
//   href,
import homepageEmbarazo from '../public/images/embarazo-h-gs.jpg';
import homepagePostparto from '../public/images/postparto-1.jpg';
import homepageLactancia from '../public/images/lactancia-h-gs.jpg';
import homepageAboutMe from '../public/about-me.jpg';

import unisonLogo from '../public/logo/unison.jpg';
import uesLogo from '../public/logo/ues.png';
import iblceLogo from '../public/logo/IBCLC_Logo.png';
export const homepageDataList = [
  {
    introPhrase: 'Nutrición en embarazo',
    // description: 'Esta consulta es ideal si estás embarazada y buscas asesoría sobre cuánto comer,
    //  qué alimentos evitar, cómo suplementarte o qué hacer con las náuseas.
    //  También para evitar complicaciones o atender tu diabetes gestacional.',
    inspirationalDescription: `Descubre la belleza de nutrirte a ti misma mientras nutres la vida en formación`,
    targetIntro: 'Para:',
    target: 'Mujeres embarazadas',
    descriptionBriefIntro: '¿Qué se busca en esta consulta?',
    descriptionList: [
      'Saber cuánto y qué comer',
      'Alimentos que debes evitar (temporalmente)',
      'Sumplementación',
      'Padecimientos - Náuseas',
      'Diabetes gestacional',
    ],
    // description: `¡Felicidades por tu embarazo!

    // La emocion y el agobio no cambian así sea tu primer o 4to embarazo,
    // es una etapa dichosa donde te sientes valiente, empoderada y fuerta por la asombrosa habilidad del cuerpo de crecer vida.
    // Probablemente tengas dudas sobre cuánto comer, qué alimentos evitar, cómo suplementarte o qué hacer con las nauseas, también puede ser que tu especialista te haya recomendado  trabajar en conjunto con nutrióloga para ayudarte a regular el azucar en sangre, presión arterial o anemia.

    // Aquí es donde yo puedo apoyarte en este trayecto.`,
    href: '#',
    picturePath: homepageEmbarazo,
    pictureAlt: 'Mujer embarazada',
    ctaMessage: 'Mas información',
  },

  {
    introPhrase: `Nutrición en postparto.`,
    targetIntro: 'Para:',
    target: 'Mujeres en etapa de postparto',
    inspirationalDescription: `El posparto es un capítulo nuevo, escríbelo con compasión y autocuidado. `,
    descriptionBriefIntro: '¿Qué se busca en esta consulta?',
    descriptionList: [
      'Saber cuánto y qué comer',
      'Mejorar tus niveles de energía',
      'Mejorar tu estado de ánimo',
      'Evitar deficiencias nutricionales',
      'Suplementación',
    ],
    // description: `Después de dar a luz es nomral que tu enfoque se centre en tu pequeño bebé.

    // Sin embargo, es durante el postparto cuanto necesitas un apoyo integral para tu nutrición y recuperación. La razón es sencilla: durante este tiempo tus necesidades nutricionales aumentan
    // significativamente, especialmente si estás amamantando. Eres más propensa a anemia, osteopenia, fatiga y depresión post parto.

    // Por lo tanto, dedicar tiempo a ser consciente de tu propia nutrición no es un lujo, sino una necesidad.`,
    href: '#',
    picturePath: homepagePostparto,
    pictureAlt: 'Mujer con bebé en postparto',
    ctaMessage: 'Mas información',
  },
  {
    introPhrase: 'Lactancia materna',
    targetIntro: 'Para:',
    target: 'Cualquier etapa de lactancia',
    inspirationalDescription: `Nutre el vínculo más profundo con tu bebé a través de la lactancia materna`,
    descriptionBriefIntro: '¿Qué se busca en esta consulta?',
    descriptionList: [
      'Mejorar técnicas de agarre',
      'Despejar dudas sobre lactancia materna',
      'Saber cuánto y qué comer',
      'Valoración de caso',
      'Suplementación',
    ],

    href: '#',
    picturePath: homepageLactancia,
    pictureAlt: 'Mujer con bebé lactando en rancho',
    ctaMessage: 'Mas información',
  },
];

export const credentialsData = {
  introPhrase: '¡Bienvenida mamá!',
  // targetIntro: '',
  inspirationalDescription: `Soy Nutrióloga y Consultora en Lactancia certificada. 
    
    Estoy aquí para ayudarte a navegar el camino de la maternidad, desde tu embarazo hasta tu postparto, también asesoro a padres con la introducción de sólidos de sus bebés para criar comedores intuitivos y atrevidos. 
    
    `,
  // inspirationalDescription: `Soy Nutrióloga y Consultora en Lactancia certificada.

  // Estoy aquí para ayudarte a navegar el camino de la maternidad, desde tu embarazo hasta tu postparto, también asesoro a padres con la introducción de sólidos de sus bebés para criar comedores intuitivos y atrevidos.

  // He aprendido de cada logro, desafío y experiencia, tanto personal como en mi práctica profesional. Cada aprendizaje se refleja en la empatía y el compromiso con el que abordo cada consulta.

  // Juntas, haremos de tu embarazo y lactancia una experiencia saludable y satisfactoria.`,
  href: '/about',
  // descriptionBriefIntro: '¿Qué se busca en esta consulta?',
  // descriptionList: [],
  // picturePath: homepageAboutMe,
  logo_1: unisonLogo,
  logo_1_alt: 'Logo de universidad, maestría',
  logo_2: uesLogo,
  logo_2_alt: 'Logo de universidad, carrera',
  logo_3: iblceLogo,
  logo_3_alt: 'Logo de organismo internacional - certificación',
  // pictureAlt: 'Mujer con bello bebé',
  ctaMessage: 'Mi historia',
};
