import React from 'react';
import Layout from '@/components/04-Templates/Layout';
import LoginForm from '@/components/03-Organisms/LoginForm';
import TwoColumnLayout from '@/components/03-Organisms/TwoColumnLayout';
import Navbar from '../04-Templates/Navbar';
export default function HomePage() {
    return (
        <>
        <Navbar/>
            <Layout>
                <div className=" flex items-center justify-center bg-gray-100 p-4 mt-[20px] ">
                    <div className="grid max-w-3xl w-full h-auto rounded-xl bg-white overflow-hidden shadow-lg grid-cols-1 lg:grid-cols-11">

                        {/* Kolom Kanan: Welcome Panel */}
                        <div className=" lg:block lg:col-span-5 py-[10px] px-[10px]">
                            <TwoColumnLayout />
                        </div>
                        {/* Kolom Kiri: Form Login */}
                        <div className="w-full lg:col-span-6 flex justify-center items-center p-[10px]">
                            <LoginForm />
                        </div>

                    </div>
                </div>
            </Layout>
        </>
        
    );
}
