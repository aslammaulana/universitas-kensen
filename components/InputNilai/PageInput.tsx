import React from 'react'
import TwoColumnLayout from '../Login/TwoColumnLayout'
import LoginForm from '../Login/LoginForm'
import InputForm from './InputForm'
import TwoInput from './TwoInput'

export default function PageInput() {
    return (
        <div className=" flex items-center justify-center p-0 ">
            <div className="grid  w-full h-auto rounded-xl bg-[#2f3a4d] overflow-hidden shadow-lg grid-cols-1 lg:grid-cols-11">

                {/* Kolom Kanan: Welcome Panel */}
                <div className=" hidden lg:block lg:col-span-4 py-[10px] px-[10px] ">
                    <TwoInput />
                </div>
                {/* Kolom Kiri: Form Login */}
                <div className="w-full lg:col-span-7 flex justify-center items-center p-[10px]">
                    <InputForm />
                </div>

            </div>
        </div>)
}
