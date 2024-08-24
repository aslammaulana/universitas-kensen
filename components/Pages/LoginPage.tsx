import React from 'react';
import Layout from '../ThemeBuilder/Layout';
import TwoColumnLayout from '../Login/TwoColumnLayout';
import LoginForm from '../Login/LoginForm';

export default function LoginPage() {
    return (
        <div className="bg-[#1c2431] min-h-screen flex items-center justify-center p-3">
            <Layout>
                <div className="flex items-center justify-center w-full h-full">
                    <div className="grid w-full max-w-4xl h-auto rounded-xl bg-[#2f3a4d] overflow-hidden shadow-lg grid-cols-1 lg:grid-cols-11">

                        {/* Kolom Kanan: Welcome Panel */}
                        <div className="hidden lg:block lg:col-span-4 py-4 px-4 flex items-center justify-center">
                            <TwoColumnLayout />
                        </div>

                        {/* Kolom Kiri: Form Login */}
                        <div className="w-full lg:col-span-7 flex justify-center items-center p-4">
                            <LoginForm />
                        </div>

                    </div>
                </div>
            </Layout>
        </div>
    );
}
