'use client';

import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const frequencies = [
  { value: 'oneTime', label: 'OneTime', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];
const services = [
  {
    name: 'Nutrición en embarazo',
    id: 'service-hobby',
    href: '/booking/user-info',
    price: { oneTime: '$800' },
    currency: 'mx pesos',
    optional_info: undefined,
    description:
      'Descubre la belleza de nutrirte a ti misma mientras nutres la vida en formación',
    features: [
      'Saber cuánto y qué comer',
      'Alimentos que debes evitar (temporalmente)',
      'Sumplementación',
      'Padecimientos - Náuseas',
      'Diabetes gestacional',
    ],
    mostPopular: false,
  },

  {
    name: 'Nutrición en postparto',
    id: 'service-freelancer',
    href: '/booking/user-info',
    currency: 'mx pesos',
    price: { oneTime: '$800' },
    optional_info: undefined,
    description:
      'El posparto es un capítulo nuevo, escríbelo con compasión y autocuidado.',
    features: [
      'Saber cuánto y qué comer',
      'Mejorar tus niveles de energía',
      'Mejorar tu estado de ánimo',
      'Evitar deficiencias nutricionales',
      'Suplementación',
    ],
    mostPopular: false,
  },
  {
    name: 'Lactancia materna',
    id: 'service-startup',
    href: '/booking/user-info',
    currency: 'mx pesos',
    price: { oneTime: '$800' },
    optional_info: undefined,
    description:
      'Nutre el vínculo más profundo con tu bebé a través de la lactancia materna',
    features: [
      'Mejorar técnicas de agarre',
      'Despejar dudas sobre lactancia materna',
      'Saber cuánto y qué comer',
      'Valoración de caso',
      'Suplementación',
    ],
    mostPopular: false,
  },
  {
    name: 'Bebés y alimentación',
    // name: 'Alimentación complementaria',
    id: 'bebes-alimentacion',
    href: '/booking/user-info',
    currency: 'mx pesos',
    price: { oneTime: '$800' },
    optional_info: "** Búscala como 'Inicio de alimentación complementaria'.",
    description:
      'Alimenta su curiosidad con colores, texturas y amor en cada bocado.',
    features: [
      'Diversidad alimentaria',
      'Alimentos que se deben evitar',
      'Preparación de alimentos',
      'Señales de saciedad y hambre',
      'Destetes y sus transiciones',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function HeroCards() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-neutral-800">
            Precios
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-800">
            Servicios 100% personalizados en modalidad online
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-600">
          Hola mamá! Te comparto los servicios de especialidad con los que puedo
          ayudarte.
        </p>
        <div className="mt-16 flex justify-center"></div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={classNames(
                'ring-1 ring-neutral-200',
                // service.mostPopular
                //   ? 'ring-2 ring-teal-600'
                //   : 'ring-1 ring-neutral-200',
                'rounded-3xl p-8',
                'bg-gradient-to-t from-rose-50 to-teal-50'
              )}
            >
              <h3
                id={service.id}
                className={classNames(
                  service.mostPopular ? 'text-teal-600' : 'text-neutral-800',
                  'text-lg font-semibold leading-8'
                )}
              >
                {service.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-neutral-600">
                {service.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-3xl font-bold tracking-tight text-neutral-800">
                  {service.price[frequencies[0].value]}
                </span>
                <span className="self-end text-md font-semibold leading-6 text-neutral-600">
                  {service.currency}
                </span>
              </p>
              <Link
                href={service.href}
                aria-describedby={service.id}
                className={classNames(
                  'bg-violet-200 text-neutral-600 shadow-sm hover:bg-rose-100',
                  // service.mostPopular
                  //   ? 'bg-teal-600 text-white shadow-sm hover:bg-teal-500'
                  //   : 'bg-teal-50  text-teal-600 ring-1 ring-inset ring-teal-800 hover:ring-teal-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                )}
              >
                Apartar cita
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-neutral-600"
              >
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-teal-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {service.optional_info ? (
                <p className="text-xs mt-4 text-neutral-600">
                  {service.optional_info}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
