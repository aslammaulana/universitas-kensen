import { useRouter } from 'next/router';
import Image from 'next/image';
import { SiswaJson } from '@/components/Dashboard/DataJson/SiswaJson';
import { HiEye, HiBadgeCheck, HiArchive, HiChevronRight } from 'react-icons/hi';
import Head from 'next/head';
import Footer from '@/components/Dashboard/04-Templates/Footer';
import Navbar2 from '@/components/Dashboard/04-Templates/NavbarDekstop';
import Navbar from '@/components/Dashboard/04-Templates/NavbarMobile';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Dashboard/04-Templates/Sidebar';
import DataSiswa from '@/components/Dashboard/03-Organisms/DataSiswa';

const SiswaDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // Pastikan id adalah string
    const idString = Array.isArray(id) ? id[0] : id;

    // Cari data siswa berdasarkan ID
    const siswa = SiswaJson.find(s => s.id === idString);

    if (!siswa) {
        return;
    }

    // Tentukan gaya tombol berdasarkan status
    const buttonStyle = {
        backgroundColor: siswa.status === "Tuntas" ? "#68b37849" : "#b3686849",
        color: siswa.status === "Tuntas" ? "#7fe294" : "#f09c9c"
    };

    return (
        <>
            <Head>
                <title>UK | {siswa.nama}</title>
                <meta name="description" content="Generated by Create Next Stack." />
            </Head>
            <div className="bg-[#1c2431] min-h-screen">
                <Navbar2 />
                <Navbar />
                <Layout>
                    <Sidebar />


                    <div className="w-full lg:ps-64 overflow-x-auto ">
                        <div className="p-4 sm:p-6  lg:p-10">
                            {/* Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-2">
                                {/* Card */}
                                <div className="flex justify-between items-end">
                                    <div className="">
                                        <p className="mt-3 text-[28px] font-semibold tracking-wide text-[#d4d6d8] ">
                                            {siswa.nama}
                                        </p>
                                        {/* Breadcrumb */}
                                        <div className="flex items-center pt-2">
                                            <ol className=" flex items-center whitespace-nowrap">
                                                <li className="flex items-center text-[13px] font-normal text-[#ffffff73]">
                                                    Siswa
                                                    <HiChevronRight size={15} className='fill-current w-4 h-4 mx-3' />
                                                </li>
                                                <li className="text-[13px] font-semibold text-[#6993dd] truncate" aria-current="page">
                                                    {siswa.id}
                                                </li>
                                            </ol>
                                            {/* End Breadcrumb */}
                                        </div>
                                    </div>

                                </div>

                                <div className="border-b border-[#ffffff49] my-[40px]"></div>
                                {/* End Card */}
                            </div>
                            <div className=" bg-[#1c2431] text-white">
                                <div className="max-w-full mx-auto bg-[#2f3a4d] p-6 rounded-lg">
                                    <div className='mb-5'>
                                        <button
                                            style={buttonStyle}
                                            className="text-[12px] font-medium py-2 px-5 rounded-full"
                                        >
                                            <span>{siswa.status}</span>
                                        </button>
                                    </div>
                                    <div className="flex mb-5">
                                        <Image
                                            src={`/images/Mahasiswa/${siswa.image}`}
                                            width={60}
                                            height={60}
                                            alt={siswa.nama}
                                            className='rounded-[7px] shrink-0 size-[50px]'
                                        />
                                        <div className="ml-3 grid justify-center items-center">
                                            <div className='text-[12px] text-[#ffffff8e]'>{siswa.id}</div>
                                            <div className='text-[20px] font-semibold'>{siswa.nama}</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mb-2 text-[14px]">
                                        <div>Mapel:</div>
                                        <div>{siswa.pelajaran}</div>
                                    </div>
                                    <div className="border-b border-[#ffffff18] my-[10px]"></div>
                                    <div className="flex justify-between mb-5 text-[14px]">
                                        <div>Nilai:</div>
                                        <div className='font-bold'>{siswa.nilai}</div>
                                    </div>
                                    <div className='mt-5'>
                                        <div className="flex space-x-2">
                                            <button
                                                className="justify-center bg-[#3d67b1] hover:bg-[#413ca1] text-white text-[12px] font-medium w-full py-2.5 px-3 rounded-md inline-flex items-center"
                                                onClick={() => router.push(`/siswa/${siswa.id}`)} // Pastikan ini sesuai dengan kebutuhan fungsional
                                            >
                                                <HiEye size={15} className='fill-current w-4 h-4 mr-1' />
                                                <span>Lihat</span>
                                            </button>
                                            <button className="justify-center bg-[#439b56] hover:bg-[#3a7a40] text-white text-[12px] w-full font-medium py-2.5 px-3 rounded-md inline-flex items-center">
                                                <HiBadgeCheck size={15} className='fill-current w-4 h-4 mr-1' />
                                                <span>Submit</span>
                                            </button>
                                            <button className="bg-[#ca4646] hover:bg-[#af3838] text-white text-[12px] font-medium py-2.5 px-3 rounded-md inline-flex items-center">
                                                <HiArchive size={15} className='fill-current w-4 h-4' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Grid */}
                        </div>
                    </div>
                </Layout>
                <Footer />
            </div>
        </>
    );
};

export default SiswaDetail;
