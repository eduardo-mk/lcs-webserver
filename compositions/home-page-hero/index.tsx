import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:bg-heros md:bg-cover md:bg-no-repeat md:h-[35rem] lg:h-[50rem] xl:h-[65rem] 2xl:h-[80rem] inset-0 object-cover">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="flex flex-col pb-10 mx-auto max-w-2xl pt-[2rem] md:pt-[20rem] lg:pt-[28rem] xl:pt-[45rem] 2xl:pt-[50rem]">
          <Image
            className="sm:block md:hidden h-[20rem] w-auto text-neutral-100 pb-4"
            src="/logo/veronica-isotipo.svg"
            alt="logo"
            width={50}
            height={50}
            priority={true}
          />
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Consultas de Nutrición y Lactancia Materna
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/booking/user-info"
                className="rounded-md bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Programa tu cita
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-neutral-900"
              >
                Mis credenciales <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
