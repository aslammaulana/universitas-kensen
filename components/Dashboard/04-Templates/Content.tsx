import React from 'react'
import TablePage from '../03-Organisms/Table'
import TableData from '../03-Organisms/TableData'

export default function Content() {
  return (
    <div className="w-full lg:ps-64 overflow-x-auto ">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 lg:p-10">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-2">
          {/* Card */}
          <p className="mt-3 text-3xl font-semibold tracking-wide text-[#ffffffec] ">
            Mahasiswa
          </p>
          <p className="text-[14px] tracking-wide text-[#ffffffb4] mb-[20px] ">
            Discover all student's grade
          </p>
          <div className="flex flex-col bg-[#181b1f] shadow-sm rounded-none">
            <div className="p-4 md:p-5">
              <div className="flex items-center gap-x-2">
              </div>
              {/* Table */}
              <TableData />
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  )
}
