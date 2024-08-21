import Link from 'next/link';
import React from 'react'
import { HiAdjustments } from "react-icons/hi";
import Btn from '../03-Organisms/Btn';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div
      id="hs-application-sidebar"
      className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-[#303346] border-e-2 border-[#ffffff18] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
      role="dialog"
      tabIndex={-1}
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full  shadow-lg">
        <Link href="/dashboard" className="px-6 pt-7">
          <Image src="/images/LogoKensen.png" width={180} height={180} alt='Logo' />
        </Link>
        {/* End Logo */}
        <Btn />





        {/* End Content */}

      </div>



    </div>
  )
}
