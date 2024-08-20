import { Link2 } from 'lucide-react'
import React from 'react'
import { HiHome } from 'react-icons/hi'

export default function Breadcrumb() {
  return (
    <div className="sticky top-0 inset-x-0 z-20 bg-[#181b1f] border-y border-[#ffffff1c] px-4 sm:px-6 lg:px-8 lg:hidden">
      <div className="flex items-center py-4">
        
        {/* End Navigation Toggle */}

        {/* Breadcrumb */}
        <ol className=" flex items-center whitespace-nowrap">
          <li className="flex items-center text-sm text-[#ffffffb6]">
            Application Layout
            <svg
              className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </li>
          <li className="text-sm font-semibold text-[#6993dd] truncate" aria-current="page">
            Dashboard
          </li>
        </ol>
        {/* End Breadcrumb */}
      </div>
    </div>
  )
}
