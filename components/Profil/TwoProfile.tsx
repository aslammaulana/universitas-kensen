import Image from 'next/image';
import React from 'react';
import { HiArchive, HiBadgeCheck, HiEye } from 'react-icons/hi';

export default function TwoProfile() {
    return (
        <div className="shadow-md rounded-[10px] p-2 justify-center items-center bg-[#1c2431] text-white h-full">
            <div className="">
                <div className=" bg-[#2f3a4d] p-6 rounded-lg">
                    
                    <div className="flex mb-5">
                        <Image
                            src='/images/Aslam-01.png'
                            width={60}
                            height={60}
                            alt='aslam'
                            className='rounded-[7px] shrink-0 size-[50px]'
                        />
                        <div className="ml-3 grid justify-center items-center">
                            <div className='text-[12px] text-[#ffffff8e]'>A0099</div>
                            <div className='text-[20px] font-semibold'>Aslam Maulana</div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-2 mt-7 text-[14px]">
                        <div>Role:</div>
                        <div>Kepala Jurusan</div>
                    </div>
                    <div className="border-b border-[#ffffff18] my-[10px]"></div>
                    <div className="flex justify-between mb-2 text-[14px]">
                        <div>Mapel:</div>
                        <div>Matematika</div>
                    </div>
                    <div className="border-b border-[#ffffff18] my-[10px]"></div>
                    <div className="flex justify-between mb-8 text-[14px]">
                        <div>Email:</div>
                        <div>Aslammaulana10@gmail.com</div>
                    </div>
                    <div className='mt-5'>
                        <div className="flex space-x-2">
                            <button
                                className="justify-center bg-[#3d67b1] hover:bg-[#413ca1] text-white text-[12px] font-medium w-full py-2.5 px-3 rounded-md inline-flex items-center"// Pastikan ini sesuai dengan kebutuhan fungsional
                            >
                                <HiEye size={15} className='fill-current w-4 h-4 mr-1' />
                                <span>Lihat</span>
                            </button>
                            <button className="bg-[#ca4646] hover:bg-[#af3838] text-white text-[12px] font-medium py-2.5 px-3 rounded-md inline-flex items-center">
                                <HiArchive size={15} className='fill-current w-4 h-4' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
