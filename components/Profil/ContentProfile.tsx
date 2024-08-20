import React from 'react'
import { HiChevronRight, HiOutlinePlus } from 'react-icons/hi'
import DataSiswa from '../Dashboard/03-Organisms/DataSiswa'
import PageProfile from './PageProfile'

export default function ContentProfil() {
    return (
        <div className="w-full lg:ps-64 overflow-x-auto ">
            <div className="p-4 sm:p-6  lg:p-10">
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-2">
                    {/* Card */}
                    <div className="flex justify-between items-end">
                        <div className="">
                            <p className="mt-3 text-[28px] font-semibold tracking-wide text-[#d4d6d8] ">
                                Profile
                            </p>
                            {/* Breadcrumb */}
                            <div className="flex items-center pt-2">
                                <ol className=" flex items-center whitespace-nowrap">
                                    <li className="flex items-center text-[13px] font-normal text-[#ffffff73]">
                                        Dashboard
                                        <HiChevronRight size={15} className='fill-current w-4 h-4 mx-3' />
                                    </li>
                                    <li className="text-[13px] font-semibold text-[#6993dd] truncate" aria-current="page">
                                        Profile
                                    </li>
                                </ol>
                                {/* End Breadcrumb */}
                            </div>
                        </div>

                    </div>

                    <div className="border-b border-[#ffffff49] my-[40px]"></div>
                    {/* <div className="flex flex-col bg-[#181b1f] shadow-sm rounded-md">
            <div className="p-4 md:p-5">
              <div className="flex items-center gap-x-2">
              </div>
              
              <TableData />

            </div>
          </div> */}
                    {/* End Card */}
                </div>
                <PageProfile />
                {/* End Grid */}
            </div>
        </div>
    )
}
