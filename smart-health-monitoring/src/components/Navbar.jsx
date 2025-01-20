import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Image className="h-8 w-8" src="/images/logo.png" alt="Logo" width={32} height={32} />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <a className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">
                  <Image src="/icons/dashboard-icon.png" alt="Dashboard" width={20} height={20} className="mr-2" />
                  Dashboard
                </a>
              </Link>
              <Link href="/patients">
                <a className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  <Image src="/icons/patients-icon.png" alt="Patients" width={20} height={20} className="mr-2" />
                  Patients
                </a>
              </Link>
              <Link href="/settings">
                <a className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  <Image src="/icons/settings-icon.png" alt="Settings" width={20} height={20} className="mr-2" />
                  Settings
                </a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/">
            <a className="text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-indigo-500 bg-indigo-50 text-base font-medium">
              <Image src="/icons/dashboard-icon.png" alt="Dashboard" width={20} height={20} className="mr-2 inline" />
              Dashboard
            </a>
          </Link>
          <Link href="/patients">
            <a className="text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              <Image src="/icons/patients-icon.png" alt="Patients" width={20} height={20} className="mr-2 inline" />
              Patients
            </a>
          </Link>
          <Link href="/settings">
            <a className="text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              <Image src="/icons/settings-icon.png" alt="Settings" width={20} height={20} className="mr-2 inline" />
              Settings
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;