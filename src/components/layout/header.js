import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { BrowserRouter as Router,Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const navigation = [
  { name: 'All Programs', href: '/', current: true },
  { name: 'Schedule GD', href: '/schedule', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Learn More', href: '/', current: false },
  { name: 'Support', href: '/contact', current: false },
]
const AllProgram = [{ name: "first", route: "/" }, { name: "second", route: "/" }, { name: "third", route: "/" }];
const LearnMore = [{ name: "About", route: "/about" }, { name: "Career", route: "/" }, { name: "Contact", route: "/contact" }];
function classNames(...classes) {

  return classes.filter(Boolean).join(' ')
}

const AllPrM = function({props,AllProgram}){
  console.log(props);
  return(<Menu as="div" className="relative inline-block text-left" key={props.name}>
  <div>
    <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-100 text-sm font-medium text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
    {props.name}
      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
    </Menu.Button>
  </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
      <div className="py-1">
        {AllProgram.map((item, index) => {
          return (<Menu.Item key = {index}>
            {({ active }) => (
              <Link
                to={item.route}
                className={classNames(
                  active ? 'bg-gray-800 text-gray-100' : 'text-gray-800',
                  'flex px-24 py-2 text-sm '
                )}
              >
                {item.name}
              </Link>
            )}
          </Menu.Item>)
        })}
      </div>
    </Menu.Items>
  </Transition>
</Menu>)
}


const AllPr = function({props,AllProgram}){
  console.log(props);
  return(<Menu as="div" className="relative inline-block text-left" key={props.name}>
  <div>
    <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-100 text-sm font-medium text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
    {props.name}
      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
    </Menu.Button>
  </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
      <div className="py-1">
        {AllProgram.map((item, index) => {
          return (<Menu.Item key = {index}>
            {({ active }) => (
              <Link
                to={item.route}
                className={classNames(
                  active ? 'bg-gray-800 text-gray-100' : 'text-gray-800',
                  'flex px-4 py-2 text-sm'
                )}
              >
                {item.name}
              </Link>
            )}
          </Menu.Item>)
        })}
      </div>
    </Menu.Items>
  </Transition>
</Menu>)
}
export default function Header() {
  const [logidin, setlogedin] = useState(false);
  // const navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className=" mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}

                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between" >
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">

                  <img
                    className="block md:hidden h-8 w-auto ml-10"
                    src="professionbeat logo.png"
                    alt="Professionbeat"
                    />
                  <img
                    className="hidden md:block h-8 w-auto"
                    src="professionbeat logo.png"
                    alt="Professionbeat"
                    />
                    </Link>
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-4">
                    
                    {navigation.map((item) => (
                      item.name==="All Programs"? <AllPr props = {item} AllProgram = {AllProgram}/>:
                      item.name==="Learn More"? <AllPr props = {item} AllProgram = {LearnMore}/>:
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {logidin ? <></> : <button type="button" className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hidden md:block">
         

                <Link to="/signup">

                Login / SignUp
                </Link>
            
                  </button>}
                  {/* <Link to="/signup">Login / SignUp</Link> */}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                {/* Profile dropdown */}
                {logidin ?

                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> : <div>

                  </div>}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                item.name==="All Programs"? <div>
                <AllPrM props = {item} AllProgram = {AllProgram} />
                </div>:
                item.name==="Learn More"?<AllPrM props = {item} AllProgram = {LearnMore}/>:
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {logidin ? <></> : <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Login / SignUp</button>}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}