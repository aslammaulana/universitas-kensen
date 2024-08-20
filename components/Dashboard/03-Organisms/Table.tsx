import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function TablePage() {
    return (
        <Table className='text-white bg-[#ffffff00] rounded-lg'>
            <TableHeader className='border-b-2 border-[#ffffff18]'>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody >
                <TableRow className='border-b-2 border-[#ffffff18]'>
                    <TableCell className="font-medium ">INV001</TableCell>
                    <TableCell>Failed</TableCell>
                    <TableCell>ken99@yahoo.com</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow className='border-b-2 border-[#ffffff18]'>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Monserrat44@gmail.com</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow className='border-b-2 border-[#ffffff18]'>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>Success</TableCell>
                    <TableCell>carmella@hotmail.com</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow className='border-b-2 border-[#ffffff18]'>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>Success</TableCell>
                    <TableCell>carmella@hotmail.com</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow className='border-b-2 border-[#ffffff18]'>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>Success</TableCell>
                    <TableCell>carmella@hotmail.com</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}
