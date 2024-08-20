import Image from 'next/image';
import React from 'react';

export default function TwoColumnLayout() {
    return (
        <div className="shadow-md rounded-[10px] flex flex-col justify-end items-center p-8 lg:p-[48px] bg-[#4c79c7] text-white h-full">
            <Image
                src="/images/LogoKensen.png"
                width={600}
                height={600}
                alt='Umroh'
                className='w-[180px] h-auto mb-7' // Gambar ditampilkan dan berwarna hitam, posisi di tengah
            />
            <Image
                src="/images/Niaga.png"
                width={700}
                height={700}
                alt='Umroh'
                className='hidden lg:block w-full lg:w-auto h-auto rounded-md mb-4' // Gambar responsif di layar besar
            />
            <p className="text-center leading-[1.7em] text-sm lg:text-[15px]">
                Enter your personal details and start journey with us
            </p>
            <button className="mt-5 border-2 border-[#ffffff75] rounded-[10px] w-full px-[40px] lg:px-[60px] text-white py-[10px] text-[14px] font-semibold hover:bg-[#f3f3f3] hover:text-[#0A57B6]">
                Register
            </button>
        </div>
    );
}
