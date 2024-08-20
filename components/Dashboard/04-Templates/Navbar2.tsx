"use client";
import Link from 'next/link';
import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HiAdjustments, HiHome, HiSearch } from 'react-icons/hi';
import { BellDotIcon, CircleDot, Dot, Settings, SquareDot } from 'lucide-react';

function Navbar2() {
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
            {/* Navbar akan disembunyikan di mobile dan hanya muncul di layar yang lebih besar */}
            <nav className='hidden md:block shadow-sm lg:ps-[260px] border-b-2 border-[#ffffff18] py-0 bg-[#181b1f]'>
                <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            {/* Bagian ini tetap ditampilkan di mobile */}

                        </div>
                        <div className="hidden md:flex ml-auto items-center space-x-2">
                            {/* Bagian ini disembunyikan di mobile dan ditampilkan di layar besar */}
                            <div className="flex-none items-end justify-end text-right">
                                <p className='text-[#ffffff] font-[700] text-[12px]'>AslamMaulana</p>
                            </div>
                            <button
                                className="  hover:bg-[#29323f] text-[#ffffff] text-[15px] font-semibold py-3 px-3 rounded-full  items-center">
                                <Settings size={15} className=' w-5 h-5' />
                            </button>

                            <img
                                className="shrink-0 size-[44px] rounded-[7px] ml-4"
                                src="../images/Profile3.png"
                                alt="Avatar"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar2;
