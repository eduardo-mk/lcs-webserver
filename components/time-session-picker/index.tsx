import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function TimeSessionPicker({ title, onSelectionHandler, hours }) {
  function onChangeHandler(e) {
    onSelectionHandler(e.target.value);
  }

  return (
    <div className="mt-4">
      <div className="timepicker__title">
        <label htmlFor="timepicker">{title}</label>
      </div>
      <select
        onChange={onChangeHandler}
        defaultValue={hours[0]}
        className=" bg-teal-50 h-12 p-3 w-[22rem] timepicker__selection focus-visible:outline-teal-600 sm:rounded-lg ring-1 ring-neutral-200"
        id="timepicker"
      >
        {hours.map((hour) => {
          return (
            <option key={hour} value={hour}>
              {hour}
            </option>
          );
        })}
      </select>
    </div>
    // <Menu as="div" className="relative inline-block text-left">
    //   <div>
    //     <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50">
    //       Hora
    //       <ChevronDownIcon
    //         aria-hidden="true"
    //         className="-mr-1 h-5 w-5 text-neutral-400"
    //       />
    //     </MenuButton>
    //   </div>

    //   <MenuItems
    //     transition
    //     className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    //   >
    //     <div className="py-1">
    //       {hours.map((hour) => {
    //         return (
    //           <MenuItem key={hour}>
    //             <a
    //               href="#"
    //               className="block px-4 py-2 text-sm text-neutral-700 data-[focus]:bg-neutral-100 data-[focus]:text-neutral-900"
    //             >
    //               {hour}
    //             </a>
    //           </MenuItem>
    //           // <option key={hour} value={hour}>
    //           //   {hour}
    //           // </option>
    //         );
    //       })}
    //     </div>
    //   </MenuItems>
    // </Menu>
  );
}

export default TimeSessionPicker;
