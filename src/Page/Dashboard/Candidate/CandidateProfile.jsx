import React, { useContext, useState } from 'react'
import demoProfile from "../../../assets/demoProfile.png"
import { useForm } from 'react-hook-form';
import BaseUrl from './../../../Utils/BaseUrl';
import { CreateAuthContext } from '../../../Context/CreateAuthContext';
import Swal from 'sweetalert2';

const CandidateProfile = () => {

  const { user } = useContext(CreateAuthContext);



  const [image, setImage] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();



  const HandleUpdateProfile = async (data) => {
    const result = await fetch(`${BaseUrl()}/user/profileUpdate/${user?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const updateResult = await result.json();
    if (updateResult.success) {
      Swal.fire({
        title: "Success!",
        text: "Profile Updated!",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "error!",
        text: "Profile not updated!",
        icon: "error"
      });
    }

  }

  const HandleImageShow = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "forst_time_upload_image");
    formData.append("cloud_name", "de8jq6747");

    const uploadImage = await fetch(`https://api.cloudinary.com/v1_1/de8jq6747/image/upload`, {
      method: "POST",
      body: formData
    });

    const image = await uploadImage.json();
    setValue("image", image.url);

  }

  return (
    <div className='p-2 md:p-5'>
      <div>
        <h1 className='text-3xl font-medium leading-5 text-gray-500'>My Profile!</h1>
        <h2 className='text-[20px] font-medium mt-[25px] text-gray-600'>Ready to jump back in?</h2>
      </div>

      {/* My Profile */}
      <form onSubmit={handleSubmit(HandleUpdateProfile)} className='px-2.5 py-10'>
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
              <input {...register("fullName")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Full Name' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Job Title</label>
              <input {...register("jobTitle")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Job Title' />
            </div>
          </div>
          {/* Phone & Email*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Phone</label>
              <input {...register("phone")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="number" placeholder='Phone Number' />

            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Email</label>
              <input {...register("email")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="email" placeholder='Email' />
            </div>
          </div>
          {/* Website & sallary*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Website</label>
              <input {...register("website")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='www.profile.com' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Expected Salary</label>
              <input {...register("expectedSalary")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Expected Salary' />
            </div>
          </div>
          {/* Exprience & age*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Exprience</label>
              <input {...register("exprience")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Exprience' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Age</label>
              <input {...register("age")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Age' />
            </div>
          </div>
          {/* Education Level & Languages */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Education Level</label>
              <input {...register("educationLevel")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Education Level' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Language</label>
              <input {...register("language")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Languages' />
            </div>
          </div>
          {/* facebook link & twiter */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Facebook Profile</label>
              <input {...register("facebook")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.facebook.com' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Twiter Profile</label>
              <input {...register("twiter")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.twiter.com/' />
            </div>
          </div>
          {/* Linkedin & github */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Linkedin Profile</label>
              <input {...register("linkedin")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.Linkedin.com' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Github Profile</label>
              <input {...register("github")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.github.com/' />
            </div>
          </div>
          {/* Country & City */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Country</label>
              <input {...register("country")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Country' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">City</label>
              <input {...register("city")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='City' />
            </div>
          </div>
          {/* Complete Address */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Complete Address</label>
              <input {...register("completeAddress")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Complete Address' />
            </div>
          </div>
          {/* Description*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Description</label>
              {/* <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Complete Address' /> */}
              <textarea {...register("description")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam corporis expedita earum maiores nobis sed necessitatibus labore minima ex aliquam ipsam dolorum rerum veniam, ad asperiores amet excepturi dignissimos!' name="" id=""></textarea>
            </div>
          </div>
        </div>
        <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Save</button>
      </form>

    </div>
  )
}

export default CandidateProfile