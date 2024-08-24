import React from 'react';
import { useRouter } from 'next/router';
import { SiswaJson } from '../../DataJson/SiswaJson';
import { HiArchive, HiBadgeCheck, HiEye } from 'react-icons/hi';
import Image from 'next/image';

interface Siswa {
    image: string;
    id: string;
    nama: string;
    pelajaran: string;
    nilai: string;
    status: string;
}

export default function DataSiswa() {
    const router = useRouter();

    const handleViewClick = (id: string) => {
        router.push(`/siswa/${id}`);
    };

    return (
        <>
            {/* Section Mobile */}
            <div className="overflow-x-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:hidden ">
                {SiswaJson.map(data => {
                    // Tentukan gaya tombol berdasarkan status
                    const buttonStyle = {
                        backgroundColor: data.status === "Tuntas" ? "#68b37849" : "#b3686849",
                        color: data.status === "Tuntas" ? "#7fe294" : "#f09c9c"
                    };

                    return (
                        <div key={data.id} className='mb-[15px] font-medium flex flex-col'>
                            <div className='bg-[#2f3a4d] text-[#FFFFFFCF] py-[20px] pr-[20px] pl-[20px] justify-between items-center rounded-lg text-[12px]'>
                                <div className='mb-5'>
                                    <button
                                        style={buttonStyle}
                                        className="text-[12px] font-medium py-2 px-5 rounded-full"
                                    >
                                        <span>{data.status}</span>
                                    </button>
                                </div>
                                <div className="flex mb-5">
                                    <Image src={`/images/Mahasiswa/${data.image}`} width={180} height={180} alt='Logo' className='shrink-0 size-[50px] rounded-[7px]' />
                                    <div className="ml-3 grid justify-center items-center">
                                        <div className='text-[12px] text-[#ffffff8e]'>{data.id}</div>
                                        <div className='text-[20px] font-semibold'>{data.nama}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2 text-[14px]">
                                    <div className=''>Mapel:</div>
                                    <div className=''>{data.pelajaran}</div>
                                </div>
                                <div className="border-b border-[#ffffff18] my-[10px]"></div>
                                <div className="flex justify-between mb-5 text-[14px]">
                                    <div className=''>Nilai:</div>
                                    <div className='font-bold'>{data.nilai}</div>
                                </div>
                                <div className='mt-5'>
                                    <div className="flex space-x-2 justify-center items-center">
                                        <button
                                            className="justify-center bg-[#3d67b1] hover:bg-[#413ca1] text-white text-[12px] font-medium w-full py-2.5 px-3 rounded-md inline-flex items-center"
                                            onClick={() => handleViewClick(data.id)}
                                        >
                                            <HiEye size={15} className='fill-current w-4 h-4 mr-1' />
                                            <span>Lihat</span>
                                        </button>
                                        <button className="justify-center bg-[#439b56] hover:bg-[#3a7a40] text-white text-[12px] w-full font-medium py-2.5 px-3 rounded-md inline-flex items-center">
                                            <HiBadgeCheck size={15} className='fill-current w-4 h-4 mr-1' />
                                            <span>Submit</span>
                                        </button>
                                        <button className="bg-[#ca4646] hover:bg-[#af3838] text-white text-[12px] font-medium py-2.5 px-3 rounded-md inline-flex items-center">
                                            <HiArchive size={15} className='fill-current w-4 h-4' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Section Mobile End */}

            {/* Section Desktop */}
            <div className="overflow-x-auto hidden md:block">
                <div className='rounded-lg mb-[15px] mt-[20px]'>
                    <div className='text-[#ffffffde] pt-[8px] pr-[20px] pb-[0px] pl-[30px] flex grid-cols-6 justify-between items-center text-[12px] font-semibold'>
                        <div className="w-[8%]">Image</div>
                        <div className='w-[8%]'>ID</div>
                        <div className='w-[20%]'>Nama</div>
                        <div className='w-[15%]'>Pelajaran</div>
                        <div className='w-[10%]'>Nilai</div>
                        <div className='w-[15%]'>Status</div>
                        <div className='w-[24%] '>Aksi</div>
                    </div>
                </div>
                {SiswaJson.map(data => {
                    // Tentukan gaya tombol berdasarkan status
                    const buttonStyle = {
                        backgroundColor: data.status === "Tuntas" ? "#68b37849" : "#b3686849",
                        color: data.status === "Tuntas" ? "#7fe294" : "#f09c9c"
                    };

                    return (
                        <div key={data.id} className='mb-[15px] font-medium'>
                            <div className='bg-[#2f3a4d] text-[#FFFFFFCF] py-[20px] pr-[20px] pl-[30px] flex grid-cols-6 justify-between items-center rounded-lg text-[12px]'>
                                <div className="w-[8%]">
                                    <Image src={`/images/Mahasiswa/${data.image}`} width={180} height={180} alt='Logo' className='shrink-0 size-[50px] rounded-[7px]' />
                                </div>
                                <div className='w-[8%]'>{data.id}</div>
                                <div className='w-[20%]'>{data.nama}</div>
                                <div className='w-[15%]'>{data.pelajaran}</div>
                                <div className='w-[10%]'>{data.nilai}</div>
                                <div className='w-[15%]'>
                                    <button
                                        style={buttonStyle}
                                        className="text-[12px] font-medium py-2 px-5 rounded-full"
                                    >
                                        <span>{data.status}</span>
                                    </button>
                                </div>
                                <div className='w-[24%]'>
                                    <div className="flex space-x-2 justify-center items-center">
                                        <button
                                            className="justify-center bg-[#3d67b1] hover:bg-[#2d508b] text-white text-[12px] font-medium py-2.5 px-3 rounded-md inline-flex w-full items-center"
                                            onClick={() => handleViewClick(data.id)}
                                        >
                                            <HiEye size={15} className='fill-current w-4 h-4 mr-1' />
                                            <span>Lihat</span>
                                        </button>
                                        <button className="justify-center bg-[#439b56] hover:bg-[#3a7a40] text-white text-[12px] font-medium py-2.5 px-3 rounded-md inline-flex w-full items-center">
                                            <HiBadgeCheck size={15} className='fill-current w-4 h-4 mr-1' />
                                            <span>Submit</span>
                                        </button>
                                        <button className="bg-[#ca4646] hover:bg-[#af3838] text-white text-[12px] font-medium py-2.5 px-3 rounded-md inline-flex items-center">
                                            <HiArchive size={15} className='fill-current w-4 h-4' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Section Desktop End */}
        </>
    );
}
