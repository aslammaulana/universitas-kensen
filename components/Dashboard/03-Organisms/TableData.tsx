import React, { useEffect, useState } from 'react';
import { User } from './users';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableData() {
  // Definisikan state dengan tipe array dari User
  const [users, setUsers] = useState<User[]>([]);

  // Gunakan useEffect untuk mengambil data dari API ketika komponen dirender
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json(); // Menggunakan tipe User[] untuk data yang diambil dari API
        setUsers(data); // Menyimpan data ke dalam state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Memanggil fungsi fetchData
  }, []); // Kosongkan array dependencies agar useEffect hanya berjalan sekali saat komponen pertama kali dirender

  return (
    <div className="overflow-x-auto">
      <Table className='min-w-[600px] text-[#cacacae3] lg:text-[14px] text-[13px] rounded-full'>
        <TableHeader className='border-b-2 border-[#222a35] bg-[#222a35] rounded-full text-white font-bold'>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Website</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id} className='border-b border-[#ffffff18]'>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">{user.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
