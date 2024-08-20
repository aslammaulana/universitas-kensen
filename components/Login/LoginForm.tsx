import React from 'react';
import Image from 'next/image';

export default function LoginForm() {
    return (
        <>
            <form className="w-full px-[20px] py-[30px] lg:rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none flex flex-col items-center">

                <h1 className="text-[20px] sm:text-[23px] font-bold mb-4 text-center text-white">
                    Sign in to KensenUniversity
                </h1>
                <div className="mt-4 relative w-full">
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="border-2 border-[#ffffff83] p-3 w-full rounded-[10px]  bg-[#2f3a4d] animated-text focus:outline-none focus:border-[#4c79c7] focus:shadow-outline text-white text-[14px]"
                    />
                    <div className="text-white text-[14px] absolute top-0 translate-y-3 translate-x-3  pointer-events-none origin-top-left bg-[#2f3a4d] pl-2 pr-2 transition-all delay-75">
                        Your Email
                    </div>
                </div>
                <div className="my-5 relative w-full">
                    <input
                        type="password"
                        placeholder="******"
                        className="border-2 border-[#ffffff83] p-3 w-full rounded-[10px] bg-[#2f3a4d] animated-text text-white focus:outline-none focus:border-[#4c79c7] focus:shadow-outline text-[14px]"
                    />
                    <div className="text-white text-[14px] absolute top-0 translate-y-3 translate-x-3 pointer-events-none origin-top-left bg-[#2f3a4d] pl-2 pr-2 transition-all delay-75">
                        Your Password
                    </div>
                </div>
                <a href="#" className="text-[12px] mb-5 block text-center text-[#ffffff91]">
                    Forgot your password?
                </a>

                <button
                    className="w-full bg-[#4c79c7] text-white py-[13px] rounded-[10px] font-semibold text-[14px] hover:bg-[#0A57B6]">
                    SIGN IN
                </button>
            </form>
        </>
    );
}
