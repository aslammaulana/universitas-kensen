import React from 'react';
import Image from 'next/image';

export default function FormProfile() {
    return (
        <>

            <form className="w-full px-[10px] py-[30px] lg:rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none flex flex-col items-center">

                <h1 className="text-[20px] sm:text-[23px] font-bold mb-7 text-center text-white ">
                    Update Profil
                </h1>
                <div className="my-2 relative w-full">
                    <label htmlFor="nilai" className="block text-white text-[12px] font-medium mb-2">Update Nama</label>
                    <input
                        type="text"
                        id="nilai"
                        className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
                        value="Aslam Maulana"
                        placeholder="Masukkan Nama"
                    />
                </div>
                <div className="my-2 relative w-full">
                    <label htmlFor="nilai" className="block text-white text-[12px] font-medium mb-2">Update Email</label>
                    <input
                        type="text"
                        id="nilai"
                        className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
                        value="Aslammaulana10@gmail.com"
                        placeholder="Masukkan Email"
                    />
                </div>

                <div className="my-2 relative w-full">
                    <label htmlFor="nilai" className="block text-white text-[12px] font-medium mb-2">Update Password</label>
                    <input
                        type="password"
                        id="nilai"
                        className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
                        value="Aslam123"
                    />
                </div>


                <button
                    className="w-full mt-[15px] bg-[#4c79c7] text-white py-[13px] rounded-[10px] font-semibold text-[14px] hover:bg-[#325796]">
                    Update Profil
                </button>
            </form>
        </>
    );
}
