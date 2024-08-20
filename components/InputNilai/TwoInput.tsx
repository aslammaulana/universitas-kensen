import Image from 'next/image';
import React from 'react';

export default function TwoInput() {
    return (
        <div className="shadow-md rounded-[10px] flex flex-col justify-center items-center p-8 lg:p-[48px] bg-[#4c79c7] text-white h-full">
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
            <p className="text-center leading-[1.7em] text-[14px] lg:text-[15px]">
                “Live as if you were to die tomorrow. Learn as if you were to live forever.”
            </p>
        </div>
    );
}
