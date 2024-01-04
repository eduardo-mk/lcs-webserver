//   index,
//   introPhrase,
//   description,
//   href,
import homepageEmbarazo from '../public/embarazo_v2.jpg';
import homepagePostparto from '../public/postparto.jpg';
import homepageLactancia from '../public/lactancia.jpg';
import homepageAboutMe from '../public/about-me.jpg';

const homepageDataList = [
  {
    introPhrase: 'Nutre tu embarazo y protege a tu bebé',
    description: `¡Felicidades por tu embarazo!
    
    La emocion y el agobio no cambian así sea tu primer o 4to embarazo, 
    es una etapa dichosa donde te sientes valiente, empoderada y fuerta por la asombrosa habilidad del cuerpo de crecer vida. 
    Probablemente tengas dudas sobre cuánto comer, qué alimentos evitar, cómo suplementarte o qué hacer con las nauseas, también puede ser que tu especialista te haya recomendado  trabajar en conjunto con nutrióloga para ayudarte a regular el azucar en sangre, presión arterial o anemia. 
    
    Aquí es donde yo puedo apoyarte en este trayecto.`,
    href: '#',
    picturePath: homepageEmbarazo,
    pictureAlt: 'Mujer embarazada',
    ctaMessage: 'Información',
  },

  {
    introPhrase: `Nutrición durante el postparto.`,
    description: `Después de dar a luz es nomral que tu enfoque se centre en tu pequeño bebé. 
    
    Sin embargo, es durante el postparto cuanto necesitas un apoyo integral para tu nutrición y recuperación. La razón es sencilla: durante este tiempo tus necesidades nutricionales aumentan
    significativamente, especialmente si estás amamantando. Eres más propensa a anemia, osteopenia, fatiga y depresión post parto.
    
    Por lo tanto, dedicar tiempo a ser consciente de tu propia nutrición no es un lujo, sino una necesidad.`,
    href: '#',
    picturePath: homepagePostparto,
    pictureAlt: 'Mujer con bebé en postparto',
    ctaMessage: 'Información',
  },
  {
    introPhrase: 'Apoyo a tu lactancia',
    description: `Cada experiencia de lactancia es especial y única. 
    
    Mi propósito es proporcionar información basada en evidencia de manera personalizada y comprensible, con compasión, equilibrando consideraciones físicas y emocionales para cada nueva familia con la que trabajo.
    
    Quizás estás aquí porque planeas amamantar, o tal vez ya estás amamantando, usando fórmula, extrayendo leche y alimentando con biberón, vaso o sonda; o cualquier combinación de estas opciones. 
    
    En cualquier situación, mi objetivo es escucharte y aprender de ti con mente abierta, para ayudar a definir y respaldar tus metas con un plan integral personalizado y una comunicación cálida.
    
    Trabajaremos juntos para que tu travesía sea lo más fácil posible`,
    href: '#',
    picturePath: homepageLactancia,
    pictureAlt: 'Mujer con bebé lactando en rancho',
    ctaMessage: 'Información',
  },
  {
    introPhrase: 'Hola',
    description: `Soy Nutrióloga y Consultora en Lactancia certificada. 
    
    Estoy aquí para ayudarte a navegar el camino de la maternidad, desde tu embarazo hasta tu postparto, también asesoro a padres con la introducción de sólidos de sus bebés para criar comedores intuitivos y atrevidos. 
    
    He aprendido de cada logro, desafío y experiencia, tanto personal como en mi práctica profesional. Cada aprendizaje se refleja en la empatía y el compromiso con el que abordo cada consulta. 
    
    Juntas, haremos de tu embarazo y lactancia una experiencia saludable y satisfactoria.`,
    href: '/about',
    picturePath: homepageAboutMe,
    pictureAlt: 'Mujer con bello bebé',
    ctaMessage: 'Credenciales',
  },
];

export default homepageDataList;
