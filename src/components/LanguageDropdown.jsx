import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Here you can add additional logic for changing the language in your app
  };

  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-brandBeige shadow-sm px-4 py-2 bg-brandBlue text-sm font-medium text-white hover:bg-brandBeige hover:text-brandBlue">
          {selectedLanguage}
          <IoIosArrowDown className="ml-2 -mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-brandBlue ring-1 ring-brandBeige ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleLanguageChange('EN')}
                className={`${
                  active ? 'bg-brandBeige text-brandBlue' : 'text-white'
                } flex justify-center items-center px-4 py-2 text-sm`} // Updated to flex and justify-center
              >
                EN
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleLanguageChange('AR')}
                className={`${
                  active ? 'bg-brandBeige text-brandBlue' : 'text-white'
                } flex justify-center items-center px-4 py-2 text-sm`} // Updated to flex and justify-center
              >
                AR
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default LanguageDropdown;
