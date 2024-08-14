"use client";
import Link from 'next/link';
import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';

function Navbar() {
    const [isClick, setIsClick] = useState(false);
    const router = useRouter();

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    const isActive = (href: string) =>
        router.pathname === href
            ? 'border-[#3a6faf] text-[#3a6faf]'
            : 'text-[#3a6faf] border-transparent hover:border-[#3a6faf] hover:text-[#3a6faf]';

    return (
        <>
            <nav className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <Image src="/images/KenLogo.png" width={180} height={180} alt='Logo' />
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link href="/" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/')}`}>
                                    Home
                                </Link>
                                <Link href="/users" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/users')}`}>
                                    Users
                                </Link>
                                <Link href="/docs" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/docs')}`}>
                                    Docs
                                </Link>
                                <a href="/aslam" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/aslam')}`}>Aslam - Rendering</a>
                                <Link href="/404" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/404')}`}>
                                    404 Not Found
                                </Link>
                            </div>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded text-[#3a6faf] hover:text-[#3a6faf] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3a6faf]" onClick={toggleNavbar}>
                                {isClick ? (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className={`font-semibold block px-3 py-2 border-b-2 ${isActive('/')}`}>
                                Home
                            </Link>
                            <Link href="/users" className={`font-semibold block px-3 py-2 border-b-2 ${isActive('/users')}`}>
                                Users
                            </Link>
                            <Link href="/docs" className={`font-semibold block px-3 py-2 border-b-2 ${isActive('/docs')}`}>
                                Docs
                            </Link>
                            <a href="/aslam" className={`font-semibold block px-3 py-2 border-b-2 ${isActive('/aslam')}`}>Aslam - Rendering</a>
                            <Link href="/404" className={`font-semibold block px-3 py-2 border-b-2 ${isActive('/404')}`}>
                                404 Not Found
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
