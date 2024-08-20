import React from 'react';

export default function FormInput() {
    return (
        <div className="grid lg:grid-cols-2 lg:space-x-5 space-y-4 lg:space-y-0">
            <div className="lg:w-[100%] w-full bg-[#2f3a4d] p-6 rounded-lg mx-auto">
                <p className="text-white text-[14px] font-medium">Input Nilai</p>
            </div>
            <div className="lg:w-[100%] w-full bg-[#2f3a4d] p-6 rounded-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="pelajaran" className="block text-white text-[12px] font-medium mb-2">Pilih Pelajaran</label>
                    <select id="pelajaran" className="w-full bg-[#222a35] text-[14px] text-white py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]">
                        <option value="Bahasa Inggris">Bahasa Inggris</option>
                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Sejarah">Sejarah</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="siswa" className="block text-white text-[12px] font-medium mb-2">Pilih Siswa</label>
                    <select id="siswa" className="w-full bg-[#222a35] text-[14px] text-white py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]">
                        <option value="Muhammad Zakir Naik">Muhammad Zakir Naik</option>
                        <option value="Siti Nurhaliza">Siti Nurhaliza</option>
                        <option value="Ahmad Zainuddin">Ahmad Zainuddin</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="nilai" className="block text-white text-[12px] font-medium mb-2">Isi Nilai</label>
                    <input
                        type="number"
                        step="0.01"
                        id="nilai"
                        className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
                        placeholder="Masukkan nilai"
                    />
                </div>

                <button type="submit" className="w-full text-[13px] bg-[#3d67b1] hover:bg-[#2f5391] text-white py-3 px-4 rounded-lg font-medium">
                    Submit
                </button>
            </div>
        </div>
    );
}
