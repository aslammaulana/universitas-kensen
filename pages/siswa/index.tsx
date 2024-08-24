// pages/siswa/index.tsx
import { SiswaJson } from '@/components/DataJson/SiswaJson';
import Link from 'next/link';

const SiswaList = () => {
    return (
        <div className="p-4 bg-[#1c2431] min-h-screen text-white">
            <div className="max-w-4xl mx-auto bg-[#2f3a4d] p-6 rounded-lg">
                <h1 className="text-2xl font-semibold mb-4">Daftar Siswa</h1>
                <ul>
                    {SiswaJson.map(siswa => (
                        <li key={siswa.id} className="mb-2">
                            <Link href={`/siswa/${siswa.id}`}>
                                <a className="text-blue-400 hover:underline">{siswa.nama}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SiswaList;
