import React, { useEffect, useState } from 'react'
import navLogo from "../assets/logo.svg"
import {  NavLink } from 'react-router'

const Navber = () => {

  const [scrolling , setScrolling] = useState(false);
  const navItem = [
    {name : "Home" , path : "/"},
    {name : "All Jobs" , path : "/allJob"},
    {name : "Blog" , path : "/blog"},
  ]

  useEffect( () =>{
  
    const handleSchollY = () =>{
      if(window.scrollY > 50){
        setScrolling(true);
      }else{
        setScrolling(false);
      }
    }

    window.addEventListener("scroll" , handleSchollY);

    return () => window.removeEventListener("scroll" , handleSchollY)
    
  } ,[])


  return (
    <div className={`py-5  fixed top-0 left-0 w-full z-50 duration-1000 ${scrolling ? "shadow bg-[#e2eaf8]" : "bg-[#e2eaf8]"}`}>
      <div className='flex items-center justify-between sectionContainer container max-sm:px-2.5 md:px-3.5'>
        {/* Logo */}
        <div className='flex items-center gap-2.5'>
          <img className='h-10 w-[120px]' src={navLogo} alt="" />
        </div>
        {/* Authentication */}
        <div className='flex gap-2.5'>
          <button className='bg-blue-200 px-[20px] py-2 rounded-md hover:bg-[#1967d2] text-[#1967d2] hover:text-white duration-500'>Login  / Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navber


