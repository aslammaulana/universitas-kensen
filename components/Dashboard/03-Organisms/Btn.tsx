import React from 'react'
import { HiAdjustments, HiBookmark, HiChartBar, HiFolderOpen, HiLibrary, HiOutlinePlus, HiOutlineUser, HiOutlineUserCircle, HiPencilAlt, HiUserCircle, HiUsers, HiViewBoards } from "react-icons/hi";
import { HiHome } from 'react-icons/hi';
import { HiMail } from 'react-icons/hi';
import { HiAnnotation } from 'react-icons/hi';
import { CircleUserRound, UserRound, UserRoundCheck } from 'lucide-react';


export default function Btn() {
    return (
        <div className='mt-[40px] mx-[13px]'>
            <p className='text-[11.5px] text-[#ffffff83] font-medium mt-5 mb-2'>GENERAL MENUS</p>
            <button
                className=" mt-[9px] bg-[#222a35] hover:bg-[#222a35] text-[#7399df] text-[14px] font-medium py-2 px-3 rounded-lg inline-flex items-center  w-full">
                <HiHome size={15} className='fill-current w-4 h-4 mr-3' />
                <span>Dashboard</span>
            </button>
            <button
                className=" mt-[9px]  hover:bg-[#222a35] text-white text-[14px] font-medium py-2 px-3 rounded-lg inline-flex items-center  w-full">
                <HiFolderOpen size={15} className='fill-current w-4 h-4 mr-3' />
                <span>Table Nilai</span>
            </button>
            <button
                className=" mt-[9px]  hover:bg-[#222a35] text-white text-[14px] font-medium py-2 px-3 rounded-lg inline-flex items-center  w-full">
                <HiOutlineUser size={15} className='fill-current w-4 h-4 mr-3' />
                <span>Profil Saya</span>
            </button>
            <button
                className=" mt-[9px]  hover:bg-[#222a35] text-white text-[14px] font-medium py-2 px-3 rounded-lg inline-flex items-center  w-full">
                <HiPencilAlt size={15} className='fill-current w-4 h-4 mr-3' />
                <span>Input Nilai</span>
            </button>
            <button
                className=" mt-[29px] bg-[#3d67b1] hover:bg-[#2f5391] text-white text-[14px] font-medium py-2 px-3 rounded-lg inline-flex items-center w-full  justify-center">
                <span className=' mr-2'>Input</span>
                <HiOutlinePlus size={15} className='fill-current w-4 h-4' />
            </button>
        </div>

    )
}
