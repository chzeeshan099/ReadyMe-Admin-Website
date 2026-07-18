import React, { useState } from 'react';
import { PiCaretDownBold, PiMagnifyingGlassBold } from 'react-icons/pi';
import { Input } from 'rizzui';

const DropdownWithSearch: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
    // Handle search logic here
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const filteredItems: string[] = []; // Replace with your filtered items logic

  return (
    <div className="relative mt-5 h-auto border rounded-md">
      <button
        className="text-sideBar_text flex w-full items-center justify-between px-4 py-3 focus:outline-none"
        onClick={toggleDropdown}
      >
        My Workspace
        <PiCaretDownBold
          strokeWidth={3}
          className={`transform ${isDropdownOpen ? 'rotate-0' : '-rotate-90'} ml-2 transition-transform duration-300`}
        />
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 mt-1 border rounded-md top-full w-full bg-white shadow-md">
          <div className="p-2">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  inputClassName="w-full h-9 pl-9 border rounded-md focus:outline-none focus:border-primary"
                  prefix={
                    <PiMagnifyingGlassBold className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                  }
                />
                {searchQuery && (
                  <button
                    className="absolute right-2 top-2 text-black"
                    onClick={clearSearch}
                  >
                    &times;
                  </button>
                )}
              </div>
              {!filteredItems.length && searchQuery && (
                <p className="text-sideBar_text pb-2 pt-4 text-center">
                  No Match Found
                </p>
              )}
              <hr className="w-full" />
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-[#2E2F31] px-3 py-2 text-white transition duration-300 hover:bg-primary-dark focus:bg-primary-dark focus:outline-none"
              >
                + Create Workspace
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;
