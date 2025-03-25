import React, { useState } from 'react'
import demoProfile from "../../../assets/demoProfile.png"

const CandidateProfile = () => {

  const [image, setImage] = useState("");

  const HandleImageShow = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div className='p-2 md:p-5'>
      <div>
        <h1 className='text-3xl font-medium leading-5 text-gray-500'>My Profile!</h1>
        <h2 className='text-[20px] font-medium mt-[25px] text-gray-600'>Ready to jump back in?</h2>
      </div>

      {/* My Profile */}
      <form className='px-2.5 py-10'>
        <div className='flex flex-col gap-5 md:flex-row py-10 items-center'>
          <img className='h-[100px] w-[100px] rounded-full' src={image ? image : demoProfile} alt="" />
          <input className='border p-10 rounded-md border-gray-300' onChange={HandleImageShow} name='file' type="file" />
        </div>
        {/* Form Input */}
        <div className='space-y-7'>
          {/* Name & Job Title */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Full Name</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Full Name' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Job Title</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Job Title' />
            </div>
          </div>
          {/* Phone & Email*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Phone</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="number" placeholder='Phone Number' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Email</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="email" placeholder='Email' />
            </div>
          </div>
          {/* Website & sallary*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Website</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='www.profile.com' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Expected Salary</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Expected Salary' />
            </div>
          </div>
          {/* Exprience & age*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Exprience</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Exprience' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Age</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Age' />
            </div>
          </div>
          {/* Education Level & Languages */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Education Level</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Education Level' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Language</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Languages' />
            </div>
          </div>
          {/* facebook link & twiter */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Facebook Profile</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.facebook.com' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Twiter Profile</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.twiter.com/' />
            </div>
          </div>
          {/* Linkedin & github */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Linkedin Profile</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.Linkedin.com' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Github Profile</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.github.com/' />
            </div>
          </div>
          {/* Country & City */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Country</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Country' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">City</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='City' />
            </div>
          </div>
          {/* Complete Address */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Complete Address</label>
              <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Complete Address' />
            </div>
          </div>
          {/* Description*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Complete Address</label>
              {/* <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Complete Address' /> */}
              <textarea className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam corporis expedita earum maiores nobis sed necessitatibus labore minima ex aliquam ipsam dolorum rerum veniam, ad asperiores amet excepturi dignissimos!' name="" id=""></textarea>
            </div>
          </div>
        </div>
        <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Save</button>
      </form>

    </div>
  )
}

export default CandidateProfile