import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Arrow from "../../assets/images/icon-arrow-dark.svg"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/prop-types
export default function MenuLinks({title, linkOne, linkTwo, linkTree}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5  text-sm font-semibold ">
          {title}
          <img src={Arrow} alt="" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 z-10 mt-2 w-[150px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {linkOne}
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {linkTwo}
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {linkTree}
                </a>
              )}
            </MenuItem>
          
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
