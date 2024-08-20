import React from 'react';
import { useRouter } from 'next/router';
import { HiHome, HiFolderOpen, HiOutlineUser, HiOutlinePlus } from 'react-icons/hi';
import Link from 'next/link';

export default function Btn() {
    const router = useRouter();

    const linkClasses = (path: string) =>
        router.pathname === path
            ? "text-[#7399df] bg-[#222a35] hover:bg-[#222a35]"
            : "hover:bg-[#222a35] text-white";

    const isInputNilaiPage = router.pathname === '/inputnilai';

    return (
        <div className='mt-[40px] mx-[13px]'>
            <p className='text-[11.5px] text-[#ffffff83] font-medium mt-5 mb-2'>GENERAL MENUS</p>

            <Link href='/dashboard'>
                <button
                    className={`mt-[9px] ${linkClasses('/dashboard')} text-[14px] font-medium py-2.5 px-3 rounded-lg inline-flex items-center w-full`}>
                    <HiHome size={15} className='fill-current w-4 h-4 mr-3' />
                    <span>Dashboard</span>
                </button>
            </Link>

            <Link href='/tabelnilai'>
                <button
                    className={`mt-[9px] ${linkClasses('/tabelnilai')} text-[14px] font-medium py-2.5 px-3 rounded-lg inline-flex items-center w-full`}>
                    <HiFolderOpen size={15} className='fill-current w-4 h-4 mr-3' />
                    <span>Table Nilai</span>
                </button>
            </Link>

            <Link href='/profil'>
                <button
                    className={`mt-[9px] ${linkClasses('/profil')} text-[14px] font-medium py-2.5 px-3 rounded-lg inline-flex items-center w-full`}>
                    <HiOutlineUser size={15} className='fill-current w-4 h-4 mr-3' />
                    <span>Profil Saya</span>
                </button>
            </Link>

            {isInputNilaiPage ? (
                <Link href='/inputnilai'>
                    <button
                        className={`mt-[9px] ${linkClasses('/inputnilai')} text-[14px] font-medium py-2.5 px-3 rounded-lg inline-flex items-center w-full`}>
                        <HiOutlinePlus size={15} className='fill-current w-4 h-4 mr-3' />
                        <span>Input Nilai</span>
                    </button>
                </Link>
            ) : (
                <Link href='/inputnilai'>
                    <button
                        className={`mt-[29px] bg-[#3d67b1] hover:bg-[#2f5391] text-white text-[14px] font-medium py-2.5 px-3 rounded-lg inline-flex items-center w-full justify-center`}>
                        <span className='mr-2'>Input</span>
                        <HiOutlinePlus size={15} className='fill-current w-4 h-4' />
                    </button>
                </Link>
            )}
        </div>
    );
}
