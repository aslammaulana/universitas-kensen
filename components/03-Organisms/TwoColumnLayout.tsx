import Image from 'next/image';
import React from 'react';

export default function WelcomePanel() {
    return (
        <div className=" shadow-md rounded-[10px] flex flex-col justify-end items-center p-8 lg:p-[48px] bg-[#0064e0] text-white h-full">
            <Image
                src="/images/LogoKensen.png"
                width={600}
                height={600}
                alt='Umroh'
                className='w-[200px] h-auto' // Gambar ditampilkan dan berwarna hitam, posisi di tengah
            />
            <Image
                src="/images/Niaga.png"
                width={700}
                height={700}
                alt='Umroh'
                className='hidden lg:block w-full lg:w-[1090px] h-auto rounded-md mt-10 mb-4' // Gambar disembunyikan di mobile, tampil di layar besar
            />
            <p className="hidden lg:block text-center leading-[1.7em] text-sm lg:text-[15px]">
                Enter your personal details and start journey with us
            </p>
            <button className="hidden lg:block mt-5 border-2 rounded-[10px] w-full px-[40px] lg:px-[60px] text-white py-[10px] text-[14px] font-semibold hover:bg-white hover:text-[#0A57B6]">
                SIGN UP
            </button>
        </div>
    );
}
