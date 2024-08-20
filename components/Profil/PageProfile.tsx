import React from 'react'
import TwoProfile from './TwoProfile'
import FormProfile from './FormProfile'

export default function PageProfile() {
    return (
        <div className=" flex items-center justify-center p-0 ">
            <div className="grid  w-full h-auto rounded-xl bg-[#2f3a4d] overflow-hidden shadow-lg grid-cols-1 lg:grid-cols-11">

                {/* Kolom Kanan: Welcome Panel */}
                <div className=" lg:block lg:col-span-4 py-[10px] px-[10px] ">
                    <TwoProfile />
                </div>
                {/* Kolom Kiri: Form Login */}
                <div className="w-full lg:col-span-7 flex justify-center items-center p-[10px]">
                    <FormProfile />
                </div>

            </div>
        </div>)
}
