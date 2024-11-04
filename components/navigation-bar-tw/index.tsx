import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { navigationItems } from '../../content';
import Image from 'next/image';
import { memo, useMemo, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClicked = (e: React.SyntheticEvent) => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <nav
        aria-label="Global"
        className=" flex items-center justify-between min-h-14 lg:px-8 h-10"
      >
        <div className="flex md:flex-1"></div>
        <div className="flex md:hidden p-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" rounded-md text-neutral-800 pt-8 pr-4"
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-16 lg:gap-x-24">
          <Image
            className="h-8 w-auto text-neutral-100"
            src="/logo/veronica-isotipo.svg"
            alt="logo"
            width={50}
            height={50}
            priority={true}
          />
          <Link
            key={navigationItems.home.label}
            href={navigationItems.home.href}
            className="text-sm font-semibold mt-1 hover:underline hover:underline-offset-4"
          >
            {navigationItems.home.label}
          </Link>
          <Link
            key={navigationItems.onlineAppointments.label}
            href={navigationItems.onlineAppointments.href}
            className="text-sm font-semibold mt-1 hover:underline hover:underline-offset-4"
          >
            {navigationItems.onlineAppointments.label}
          </Link>

          <Link
            key={navigationItems.about.label}
            href={navigationItems.about.href}
            className="text-sm font-semibold mt-1 hover:underline hover:underline-offset-4"
          >
            {navigationItems.about.label}
          </Link>
          <Link
            href={navigationItems.login.href}
            className="text-sm font-semibold leading-6 hover:underline hover:underline-offset-4"
          >
            {navigationItems.login.label}
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end "></div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-10 py-8 sm:max-w-sm sm:ring-1 sm:ring-neutral-800/10">
          <div className="flex items-end justify-end">
            {/* <a href="#" className="-m-1.5 p-1.5"></a> */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="border-purple-300 border-2 place-self-start rounded-md  text-neutral-800"
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-600/10">
              <div className="space-y-2 py-6" onClick={handleLinkClicked}>
                <Link
                  key={navigationItems.home.label}
                  href={navigationItems.home.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold mt-1 text-neutral-900 hover:bg-neutral-50`}
                >
                  {navigationItems.home.label}
                </Link>
                <Link
                  key={navigationItems.onlineAppointments.label}
                  href={navigationItems.onlineAppointments.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold mt-1 text-neutral-900 hover:bg-neutral-50`}
                >
                  {navigationItems.onlineAppointments.label}
                </Link>
                <Link
                  key={navigationItems.about.label}
                  href={navigationItems.about.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold mt-1 text-neutral-900 hover:bg-neutral-50`}
                >
                  {navigationItems.about.label}
                </Link>
              </div>
              <div className="py-6" onClick={handleLinkClicked}>
                <Link
                  href="/login"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-800 hover:bg-neutral-50`}
                >
                  {navigationItems.login.label}
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default memo(NavigationBar);
