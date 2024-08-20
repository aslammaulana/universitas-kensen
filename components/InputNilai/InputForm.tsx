import React from 'react';
import Image from 'next/image';

export default function InputForm() {
    return (
        <>
            
            <form className="w-full px-[10px] py-[30px] lg:rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none flex flex-col items-center">

                <h1 className="text-[20px] sm:text-[23px] font-bold mb-7 text-center text-white ">
                    Input Nilai Siswa
                </h1>
                <div className="my-2 relative w-full">
                    <label htmlFor="pelajaran" className="block text-white text-[12px] font-medium mb-2">Pilih Pelajaran</label>
                    <select id="pelajaran" className="w-full bg-[#222a35] text-[14px] text-white py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]">
                        <option value="Bahasa Inggris">Bahasa Inggris</option>
                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Sejarah">Sejarah</option>
                    </select>
                </div>

                <div className="my-2 relative w-full">
                    <label htmlFor="siswa" className="block text-white text-[12px] font-medium mb-2">Pilih Siswa</label>
                    <select id="siswa" className="w-full bg-[#222a35] text-[14px] text-white py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]">
                        <option value="Muhammad Zakir Naik">Muhammad Zakir Naik</option>
                        <option value="Siti Nurhaliza">Siti Nurhaliza</option>
                        <option value="Ahmad Zainuddin">Ahmad Zainuddin</option>
                    </select>
                </div>

                <div className="my-2 relative w-full">
                    <label htmlFor="nilai" className="block text-white text-[12px] font-medium mb-2">Isi Nilai</label>
                    <input
                        type="number"
                        step="0.01"
                        id="nilai"
                        className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
                        placeholder="Masukkan nilai"
                    />
                </div>
                

                <button
                    className="w-full mt-[15px] bg-[#4c79c7] text-white py-[13px] rounded-[10px] font-semibold text-[14px] hover:bg-[#325796]">
                    Submit
                </button>
            </form>
        </>
    );
}
