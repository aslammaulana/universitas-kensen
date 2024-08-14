import React from 'react';
import Image from 'next/image';

export default function LoginForm() {
    return (
        <>
            <form className="w-full px-[20px] py-[30px] lg:rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none flex flex-col items-center">
                
                <h1 className="text-[20px] sm:text-[23px] font-bold mb-4 text-center">
                    Sign in to KensenUniversity
                </h1>
                <div className="mt-4 relative w-full">
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="border-2 border-gray-300 p-2.5 w-full rounded-[10px] animated-text focus:outline-none focus:border-blue-600 focus:shadow-outline"
                    />
                    <div className="text-gray-600 absolute top-0 translate-y-3 translate-x-3 pointer-events-none origin-top-left bg-white pl-2 pr-2 transition-all delay-75">
                        Your Email
                    </div>
                </div>
                <div className="my-5 relative w-full">
                    <input
                        type="password"
                        placeholder="******"
                        className="border-2 border-gray-300 p-2.5 w-full rounded-[10px] animated-text focus:outline-none focus:border-blue-600 focus:shadow-outline"
                    />
                    <div className="text-gray-600 absolute top-0 translate-y-3 translate-x-3 pointer-events-none origin-top-left bg-white pl-2 pr-2 transition-all delay-75">
                        Your Password
                    </div>
                </div>
                <a href="#" className="text-sm mb-5 block text-center">
                    Forgot your password?
                </a>

                <button
                    className="w-full bg-[#0064e0] text-white py-[13px] rounded-[10px] font-semibold text-[14px] hover:bg-[#0A57B6]">
                    SIGN IN
                </button>
            </form>
        </>
    );
}
