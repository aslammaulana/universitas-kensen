import React from 'react'
import TwoColumnLayout from './TwoColumnLayout'
import LoginForm from './LoginForm'
import TwoInput from '../InputNilai/TwoInput'
import InputForm from '../InputNilai/InputForm'

export default function PageLogin() {
    return (
        <div className=" flex items-center justify-center p-0 ">
            <div className="grid  w-full h-auto rounded-xl bg-white overflow-hidden shadow-lg grid-cols-1 lg:grid-cols-11">

                {/* Kolom Kanan: Welcome Panel */}
                <div className=" lg:block lg:col-span-4 py-[10px] px-[10px]">
                    <TwoColumnLayout />
                </div>
                {/* Kolom Kiri: Form Login */}
                <div className="w-full lg:col-span-7 flex justify-center items-center p-[10px]">
                    <LoginForm />
                </div>

            </div>
        </div>)
}
