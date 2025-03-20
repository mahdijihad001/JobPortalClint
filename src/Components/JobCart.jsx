import React from 'react'
import figma from "../assets/figma.png"
import { FaFileInvoiceDollar, FaRegBookmark } from 'react-icons/fa'
import { GrDocumentStore } from 'react-icons/gr'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineWatchLater } from 'react-icons/md'

const JobCart = () => {
  return (
    <div className='p-7 grid grid-cols-12 gap-2.5 border border-gray-300 rounded-md'>
    {/* Logo */}
    <div className='bg-[#f3f4f7] h-[70px] w-[70px] rounded-md col-span-2 flex items-center justify-center'>
      <img src={figma} className='h-[40px] w-[40px]' alt="" />
    </div>
    <div className='col-span-9'>
      <h1 className='font-bold text-xl text-gray-500 mb-2'>Software Engineer (Android), Libraries</h1>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1'>
          <span className='text-[18px] text-[#696969]'><GrDocumentStore /></span>
          <span className='text-[#696969] text-[14px] font-medium'>Segment</span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='text-[18px] text-[#696969]'><FaLocationDot /></span>
          <span className='text-[#696969] text-[14px] font-medium'>London, UK</span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='text-[18px] text-[#696969]'><MdOutlineWatchLater /></span>
          <span className='text-[#696969] text-[14px] font-medium'>11 hours ago</span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='text-[18px] text-[#696969]'><FaFileInvoiceDollar /></span>
          <span className='text-[#696969] text-[14px] font-medium'>$35k - $45k</span>
        </div>
      </div>
      <div className='flex gap-5 pt-3'>
        <button className='bg-[#1967d2]/20 text-[#1967d2] px-5 py-1.5 rounded-[50px]'>Full Time</button>
        <button className='bg-[#34a853]/20 text-[#34a853] px-5 py-1.5 rounded-[50px]'>Private</button>
        <button className='bg-[#f9ab00]/20 text-[#f9ab00] px-5 py-1.5 rounded-[50px]'>Urgent</button>
      </div>
    </div>
    <div className='col-span-1'>
      <FaRegBookmark className='font-bold text-3xl text-gray-600' />
    </div>
  </div>
  )
}

export default JobCart