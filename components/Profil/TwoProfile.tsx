import Image from 'next/image';
import React from 'react';
import { HiArchive, HiBadgeCheck, HiEye } from 'react-icons/hi';

export default function TwoProfile() {
    return (
        <div className="  justify-center items-center  text-white h-full">
            <div className="">
                <div className=" bg-[#2f3a4d] p-6 rounded-lg">
                    
                    <div className="flex mb-5">
                        <Image
                            src='/images/Aslam-01.png'
                            width={460}
                            height={460}
                            alt='aslam'
                            className='rounded-[7px] shrink-0 size-[50px]'
                        />
                        <div className="ml-3 grid justify-center items-center">
                            <div className='text-[12px] text-[#ffffff8e]'>A0099</div>
                            <div className='text-[17px] font-semibold'>Aslam Maulana</div>
                        </div>
                    </div>
                    <div className='text-[12px] text-[#ffffff8e] mt-8'>PERSONAL INFO</div>

                    <div className="flex justify-between mb-2 mt-4 text-[14px]">
                        <div>Email:</div>
                        <div>Aslam Maulana</div>
                    </div>
                    <div className="border-b border-[#ffffff18] my-[10px]"></div>
                    <div className="flex justify-between mb-2 text-[14px]">
                        <div>Phone:</div>
                        <div>+62851-8440-2132</div>
                    </div>
                    <div className="border-b border-[#ffffff18] my-[10px]"></div>
                    <div className="flex justify-between  text-[14px]">
                        <div>Address:</div>
                        <div>Banda Aceh</div>
                    </div>
                    <div className="border-b border-[#ffffff18] my-[10px]"></div>
                    <div className="flex justify-between mb-2 text-[14px]">
                        <div>Role:</div>
                        <div>Admin</div>
                    </div>
                    <div className="border-b border-[#ffffff18] my-[10px]"></div>
                    <div className="flex justify-between  text-[14px]">
                        <div>Mapel:</div>
                        <div>Matematika</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
