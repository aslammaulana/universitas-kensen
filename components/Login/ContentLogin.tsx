import React from 'react'
import { HiChevronRight, HiOutlinePlus } from 'react-icons/hi'
import PageLogin from './PageLogin'

export default function ContentLogin() {
    return (
        <div className="w-full lg:ps-64 overflow-x-auto ">
            <div className="p-4 sm:p-6  lg:p-10">
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-2">
                    {/* Card */}
                    <div className="flex justify-between items-end">
                        <div className="">
                            <p className="mt-3 text-[28px] font-semibold tracking-wide text-[#d4d6d8] ">
                                Login
                            </p>
                            {/* Breadcrumb */}
                            <div className="flex items-center pt-2">
                                <ol className=" flex items-center whitespace-nowrap">
                                    <li className="flex items-center text-[13px] font-normal text-[#ffffff73]">
                                        Dashboard
                                        <HiChevronRight size={15} className='fill-current w-4 h-4 mx-3' />
                                    </li>
                                    <li className="text-[13px] font-semibold text-[#6993dd] truncate" aria-current="page">
                                        Input Nilai
                                    </li>
                                </ol>
                                {/* End Breadcrumb */}
                            </div>
                        </div>

                    </div>

                    <div className="border-b border-[#ffffff49] my-[40px]"></div>
                    {/* End Card */}
                </div>
                <PageLogin />
                {/* End Grid */}
            </div>
        </div>
    )
}
