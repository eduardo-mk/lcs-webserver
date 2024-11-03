import Image from 'next/image';
import veroAmamantando from '../../public/images/lactancia-v-n.jpg';
const incentives = [
  {
    name: 'Consulta en línea',
    imageSrc: '/svg/online-interview-female.svg',
    description:
      'Realizo las consultas en un ambiente seguro, siempre prendo mi cámara y me encuentro en una habitación controlada para darte el trato y seriedad que te mereces.',
  },
  {
    name: 'Atención profesional',
    imageSrc: '/svg/certificate-color.svg',
    description:
      'Cuento con una amplia trayectoria en el campo de la nutrción infantil, madres gestantes y lactancia materna.',
  },
  {
    name: 'Trato humano',
    imageSrc: '/svg/happy-woman.svg',
    description:
      'Estoy aqui para ayudarte no para juzgarte, realizo mi consulta con empatía y respeto.',
  },
  {
    name: 'Nutrición Infantil',
    imageSrc: '/svg/baby-newborn.svg',
    description:
      'Soy una profesional advocada al desarrollo sano de los bebés, me encantaría poder ayudate con mitos acerca de la nutrción en bebés',
  },
  {
    name: 'Especializad en Lactancia',
    imageSrc: '/svg/breast-feeding-tone3.svg',
    description:
      'Cuento con una certification como consultora en lactancia internacional.',
  },
  {
    name: 'Soporte post-consulta',
    imageSrc: '/svg/cellular.svg',
    description:
      'Algunos de mis servicios incluyen un periodo de soporte post consulta para atender dudas **',
  },
];

export default function Incentives() {
  return (
    <div className="bg-gradient-to-t from-rose-50 to-teal-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-800">
                Estoy aquí para ayudarte en tus etapas de embarazo.
              </h2>
              <p className="mt-4 text-neutral-600">
                Una de mis motivaciones en la vida es ayudar a las personas, por
                esa razón decidí formarme como nutrióloga y en el camino
                descubrí algo maravilloso; la nutrición infantil. De ahí
                emprendí un camino de especialidad y pude licenciarme como
                consultora internacional de lactancia además de una maestría.
                <br></br> <br></br>
                Como madre pasé por muchas complicaciones con la lactancia, con
                la nutrición post parto mía y de mi hijo, esto ha dejado
                inumerables experiencias. Mis servicios de consulta ofrecen un
                trato humano, empatico, personalizado y profesional.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-neutral-100">
              <Image
                className="h-auto w-auto text-neutral-100"
                src={veroAmamantando}
                alt="Mujer dando de mamar"
                priority={true}
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0 md:self-center md:items-center ">
                  <Image
                    alt="small icon"
                    src={incentive.imageSrc}
                    className="mx-auto"
                    width={80}
                    height={80}
                  />
                  {/* <img alt="" src={incentive.imageSrc} className="h-16 w-16" /> */}
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-lg text-center font-medium text-neutral-800">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-md text-neutral-600">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
