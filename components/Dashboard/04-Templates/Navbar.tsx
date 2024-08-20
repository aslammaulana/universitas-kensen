"use client";
import Link from 'next/link';
import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HiFolderOpen, HiHome, HiOutlinePlus, HiOutlineUser } from 'react-icons/hi';

function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const router = useRouter();

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  const isActive = (href: string) =>
    router.pathname === href
      ? 'border-[#3a6faf] text-[#3a6faf]'
      : 'text-[#ededed] border-transparent hover:border-[#3a6faf] hover:text-[#3a6faf]';

  const mobileLinkClasses = (href: string) =>
    router.pathname === href
      ? 'text-[#7399df] bg-[#222a35] hover:bg-[#222a35]'
      : 'hover:bg-[#222a35] text-white';

  const isInputNilaiPage = router.pathname === '/inputnilai';

  return (
    <>
      <nav className='sticky top-0 inset-x-0 z-20 bg-[#12171d] lg:ps-[260px] border-b border-[#ffffff1c] lg:hidden'>
        <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image src="/images/LogoKensen.png" width={180} height={180} alt='Logo' />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/')}`}>
                  Home
                </Link>
                <Link href="/dashboard" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/dashboard')}`}>
                  Dashboard
                </Link>
                <Link href="/login" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/login')}`}>
                  Login
                </Link>
                <Link href="/dasbor" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/dasbor')}`}>
                  Dasbor2
                </Link>
                <Link href="/404" className={`font-semibold px-3 py-2 border-b-2 ${isActive('/404')}`}>
                  404 Not Found
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded text-[#ededed] hover:text-[#ededed] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3f5069]" onClick={toggleNavbar}>
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
            <div className="px-2 pt-2 pb-3 mx-[5px] sm:px-3">
              <Link href='/dashboard'>
                <button
                  className={`mt-[9px] ${mobileLinkClasses('/dashboard')} text-[14px] font-medium py-3 px-3 rounded-lg inline-flex items-center w-full`}>
                  <HiHome size={15} className='fill-current w-4 h-4 mr-3' />
                  <span>Dashboard</span>
                </button>
              </Link>
              <Link href='/tabelnilai'>
                <button
                  className={`mt-[9px] ${mobileLinkClasses('/tabelnilai')} text-[14px] font-medium py-3 px-3 rounded-lg inline-flex items-center w-full`}>
                  <HiFolderOpen size={15} className='fill-current w-4 h-4 mr-3' />
                  <span>Table Nilai</span>
                </button>
              </Link>
              <Link href='/profil'>
                <button
                  className={`mt-[9px] ${mobileLinkClasses('/profil')} text-[14px] font-medium py-3 px-3 rounded-lg inline-flex items-center w-full`}>
                  <HiOutlineUser size={15} className='fill-current w-4 h-4 mr-3' />
                  <span>Profil Saya</span>
                </button>
              </Link>
              {isInputNilaiPage ? (
                <Link href='/inputnilai'>
                  <button
                    className={`mt-[9px] ${mobileLinkClasses('/inputnilai')} text-[14px] font-medium py-3 px-3 rounded-lg inline-flex items-center w-full`}>
                    <HiOutlinePlus size={15} className='fill-current w-4 h-4 mr-3' />
                    <span>Input Nilai</span>
                  </button>
                </Link>
              ) : (
                <Link href='/inputnilai'>
                  <button
                    className="mt-[19px] bg-[#3d67b1] hover:bg-[#2f5391] text-white text-[14px] font-medium py-3 px-3 rounded-lg inline-flex items-center w-full justify-center">
                    <span className='mr-2'>Input</span>
                    <HiOutlinePlus size={15} className='fill-current w-4 h-4' />
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
