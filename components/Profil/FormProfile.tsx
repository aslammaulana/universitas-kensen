import React from 'react';
import Image from 'next/image';

export default function FormProfile() {
    return (
        <>

            <form className="bg-[#2f3a4d]  w-full px-[30px] py-[30px] rounded-lg  flex flex-col ">

                <h1 className="text-[16px] sm:text-[17px] font-bold mb-4 text-start text-white ">
                    Update Profil Kamu
                </h1>
                <div className="my-2 relative w-full">
                    <label htmlFor="nilai" className="block text-[#ffffffd8] text-[12px] font-medium mb-2">Nama</label>
                    <input
                        type="text"
                        id="nilai"
                        className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
                        placeholder="Aslam Maulana"
                    />
                </div>
                <div className="my-2 relative w-full">
                    <label htmlFor="nilai" className="block text-[#ffffffd8] text-[12px] font-medium mb-2">Email</label>
                    <input
                        type="text"
                        id="nilai"
                        className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
                        placeholder="Aslammaulana10@gmail.com"
                    />
                </div>

                <div className="my-2 relative w-full">
                    <label htmlFor="nilai" className="block text-[#ffffffd8] text-[12px] font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="nilai"
                        className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
                        placeholder="********"

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
