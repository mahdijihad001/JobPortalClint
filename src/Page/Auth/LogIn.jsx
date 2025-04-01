import React from 'react'
import LogInImage from "../../assets/banner-img-1.png"
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import BaseUrl from '../../Utils/BaseUrl'
import Swal from 'sweetalert2'

const LogIn = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const HandleLogIn = async(data) =>{
        try {
            const result = await fetch(`${BaseUrl()}/user/login` , {
                method : "POST" ,
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data),
                credentials : "include"
            });

            if(!result.ok){
                Swal.fire({
                    title: "error!",
                    text: "Log In Faild Please try again!",
                    icon: "error"
                  });
            }
            
            const user = await result.json();
            Swal.fire({
                title: "Success!",
                text: "You are successfully login!",
                icon: "success"
              });
              localStorage.setItem("user" , JSON.stringify(user?.user))

        } catch (error) {
            return alert("Login Faild! Please try again.")
        }
      }

    return (
        <div className='container sectionContainer grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[92vh]'>
            <div className='relative hidden md:block'>
                <img className='absolute bottom-0' src={LogInImage} alt="" />
            </div>
            {/* Log In Form */}
            <div className='flex flex-col justify-center'>
                <div className='text-center mb-10'>
                    <h1 className='font-bold text-4xl text-gray-600'>Login to Superio</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(HandleLogIn)} className="p-4 space-y-3">
                        <div>
                            <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Username</label>
                            <input {...register("username")} className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="text" placeholder='Username' />
                        </div>
                        <div>
                            <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Password</label>
                            <input {...register("password")} className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="password" placeholder='Password' />
                        </div>
                        <div className='flex items-center justify-end mt-2.5 py-3'>
                            <Link className='text-blue-500'>Forgot password?</Link>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='bg-[#1967d2] w-full py-3 rounded-md font-bold text-white text-xl hover:bg-[#6e86a8] duration-500'>Log In</button>
                        </div>
                    </form>
                    <div className='p-4'>
                        <h2 className='font-medium text-[18px] leading-5 text-[#696969] text-center'>Don't have an account? <Link className='font-bold' to={"/singUp"}>Signup</Link></h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn