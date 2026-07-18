"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'rizzui';
import MoneyMuttLogo from "../moneyMuttImages/moneyMuttLogo.svg";
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoPinterest } from 'react-icons/io';
import { PiX, PiList } from 'react-icons/pi';
import { menuItems } from '@/config/menu-items';
import { WalletModal } from '@/modules/landing-page/hero-banner/models/wallet-model';

interface DropdownMenuProps {
    items: { name: string; href: string; }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
    return (
        <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 p-4 min-w-[200px] z-50">
            {items.map((item, index) => (
                <a
                    key={`${item.name}-${index}`}
                    href={item.href}
                    className="block py-2 px-4 hover:bg-gray-100 rounded transition duration-200"
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
};

interface SocialIconProps {
    icon: React.ElementType;
    href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-primary transition duration-300"
    >
        <Icon className="w-5 h-5" />
    </a>
);

export const TopBar: React.FC = () => (
    <div className='hidden md:flex bg-primary-dark'>
    <div className="hidden md:flex text-white p-4 w-full max-w-7xl mx-auto bg-primary-dark ">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
            <p className="text-base ml-6 font-medium">Welcome to MoneyMutt</p>
            <div className="flex gap-x-4 items-center">
                <a href="mailto:support@livecon.com" className="border-r-2 pr-2 hover:text-yellow-primary transition duration-300">
                    support@livecon.com
                </a>
                <SocialIcon icon={FaFacebookF} href="#" />
                <SocialIcon icon={FaSquareXTwitter} href="#" />
                <SocialIcon icon={IoLogoPinterest} href="#" />
                <SocialIcon icon={FaLinkedinIn} href="#" />
            </div>
        </div>
    </div>
    </div>
);

interface NavItemProps {
    item: typeof menuItems[0];
    isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, isMobile }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileDropdown = (e: React.MouseEvent) => {
        if (isMobile && item.dropdownItems) {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    return (
        <li className={`
            relative group z-20
            ${isMobile ? 'w-full' : ''}
        `}>
            <a
                href={item.href}
                onClick={toggleMobileDropdown}
                className={`
                    flex items-center justify-between text-sm
                    hover:text-yellow-primary transition-colors duration-200
                    ${isMobile ? 'py-2.5 px-3 hover:bg-white/5 rounded-md w-full' : 'py-2'}
                `}
            >
                <span>{item.name}</span>
                {item.dropdownItems && (
                    <FaChevronDown className={`
                        ml-1.5 w-2.5 h-2.5 opacity-70 transition-transform duration-200
                        ${isMobile ? (isOpen ? 'rotate-180' : '') : 'group-hover:rotate-180'}
                        ${isMobile ? '' : 'group-hover:text-yellow-primary'}
                    `} />
                )}
            </a>
            
            {item.dropdownItems && (
                <div className={`
                    ${isMobile 
                        ? `mt-1 ml-3 border-l  border-white/10 pl-3 overflow-hidden transition-all duration-200
                           ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`
                        : `absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[200px]
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           transform transition-all duration-200 ease-out`
                    }
                `}>
                    <div className={`
                        ${!isMobile && `
                            relative bg-white rounded-lg shadow-lg border border-gray-100
                            before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
                            before:border-8 before:border-transparent before:border-b-white
                        `}
                    `}>
                        {item.dropdownItems.map((dropdownItem, index) => (
                            <a
                                key={`${dropdownItem.name}-${index}`}
                                href={dropdownItem.href}
                                className={`
                                    block text-sm transition-colors duration-200
                                    ${isMobile 
                                        ? 'py-2 px-3 text-white/80 hover:text-yellow-primary' 
                                        : 'py-3 px-5 text-gray-600 hover:text-black hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'
                                    }
                                `}
                            >
                                {dropdownItem.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </li>
    );
};

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    if (!isMounted) return null;

    return (
        <div className="w-full bg-primary-lighter z-[999] pt-4 text-white">
            {/* <TopBar /> */}
            <nav className="relative flex py-4 px-4 justify-between w-full max-w-7xl  mx-auto items-center">
                <a href='/' className=" font-bold cursor-pointer">
                    <Image src={MoneyMuttLogo} alt="Money Mutt" className="w-auto h-8 md:h-12" />
                </a>
                <button
                    onClick={toggleMenu}
                    className="lg:hidden  p-1.5 rounded-md hover:bg-white/10 transition-colors duration-200 z-20"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                       ''
                    ) : (
                        <PiList className="w-5 h-5" />
                    )}
                </button>

                {/* Mobile Menu */}
                <div 
                    className={`
                        fixed inset-0 z-10 lg:hidden
                        transition-all duration-200 ease-in-out
                        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                    `}
                >
                    <div 
                        className="absolute inset-0 bg-gray-900/90"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <nav className={`
                        relative h-full w-full max-w-[300px] ml-auto
                        bg-primary-lighter transform transition-transform duration-300
                        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}>
                        <div className="h-full overflow-y-auto">
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <Image src={MoneyMuttLogo} alt="Money Mutt" className="w-auto h-8" />
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-1.5 rounded-md hover:bg-white/10 transition-colors duration-200"
                                >
                                    <PiX className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="py-4">
                                <ul className="flex flex-col space-y-1.5 px-4">
                                    {menuItems.map((item, index) => (
                                        <NavItem 
                                            key={`${item.name}-${index}`} 
                                            item={item} 
                                            isMobile={true} 
                                        />
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-3 px-4 mt-6">
                                    <Button
                                        rounded="pill"
                                        className="w-full  text-gray-1300 py-2.5 text-sm bg-yellow-primary"
                                        onClick={() => setIsBuyModalOpen(true)}
                                    >
                                        Buy Now
                                    </Button>
                                    <Button
                                        rounded="pill"
                                        className="w-full bg-transparent text-white py-2.5 text-sm
                                        border border-white/30 hover:bg-white/10 
                                        "
                                    >
                                        Join Community
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex max-w-7xl items-center space-x-5 text-sm">
                    {menuItems.map((item, index) => (
                        <NavItem key={`${item.name}-${index}`} item={item} />
                    ))}
                </ul>

                <div className="hidden  xl:flex items-center gap-3">
                    <Button
                        rounded="pill"
                        className=" text-gray-1300 px-5 py-2 text-sm
                        bg-yellow-primary hover:bg-yellow-600"
                        onClick={() => setIsBuyModalOpen(true)}
                    >
                        Buy Now
                    </Button>
                    <Button
                        rounded="pill"
                        className="bg-transparent text-white px-5 py-2 text-sm
                        border border-white/30 hover:bg-white/10 
                        "
                    >
                        Join Community
                    </Button>
                </div>
            </nav>
            <WalletModal 
                isOpen={isBuyModalOpen}
                onClose={() => setIsBuyModalOpen(false)}
            />
        </div>
    );
};

export default Navbar;
